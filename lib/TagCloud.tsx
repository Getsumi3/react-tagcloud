import PropTypes from "prop-types";
import randomColor from "randomcolor";
import React, { useEffect, useState } from "react";
import seedrandom from "seedrandom";
import arrayShuffle from "shuffle-array";

import { defaultRenderer } from "./defaultRenderer";
import { fontSizeConverter, keys, omit, pick } from "./helpers";
import { RendererFunction, Tag, TagCloudProps } from "./main.ts";

const handlersPropNames = [
    "onClick",
    "onDoubleClick",
    "onMouseMove",
    "onMouseOver",
    "onMouseOut",
    "onContextMenu",
    // rn handlers
    "onPress",
    "onPressIn",
    "onPressOut"
];
const cloudPropNames = [
    "tags",
    "shuffle",
    "renderer",
    "maxSize",
    "minSize",
    "colorOptions",
    "disableRandomColor",
    "randomSeed",
    "randomNumberGenerator",
    "containerComponent"
];

function getTagHashCode(tag: Tag) {
    return tag.key + tag.value + tag.count;
}

function generateColor(
    tag: Tag,
    {
        disableRandomColor,
        colorOptions,
        randomSeed
    }: Pick<TagCloudProps, "disableRandomColor" | "colorOptions" | "randomSeed">
) {
    if (tag.color) {
        return tag.color;
    }
    if (disableRandomColor) {
        return undefined;
    }
    return randomColor({
        seed: randomSeed && `${randomSeed}:${getTagHashCode(tag)}`,
        ...colorOptions
    });
}

function withTagCloudHandlers(
    elem: JSX.Element,
    tag: Tag,
    cloudHandlers: Record<string, (tag: Tag, e: any) => void>
) {
    const origHandlers: Record<string, (e: any) => void> = pick(elem.props, handlersPropNames);
    const props = keys(cloudHandlers).reduce(
        (acc: Record<string, (e: any) => void>, handlerName) => {
            if (cloudHandlers[handlerName] || origHandlers[handlerName]) {
                acc[handlerName] = (e) => {
                    cloudHandlers[handlerName] && cloudHandlers[handlerName](tag, e);
                    // @ts-ignore
                    origHandlers[handlerName] && origHandlers(e);
                };
            }
            return acc;
        },
        {}
    );
    return React.cloneElement(elem, props);
}

function renderTags(
    props: TagCloudProps & { renderer: RendererFunction },
    data: { tag: Tag; color: string | undefined }[]
) {
    const { minSize, maxSize } = props;
    const counts = data.map(({ tag }) => tag.count),
        min = Math.min(...counts),
        max = Math.max(...counts);
    const cloudHandlers = pick(props, handlersPropNames);
    return data.map(({ tag, color }) => {
        const fontSize = fontSizeConverter(tag.count, min, max, minSize, maxSize);
        const elem = props.renderer(tag, fontSize, color as string);
        return withTagCloudHandlers(elem, tag, cloudHandlers);
    });
}

function randomize(props: TagCloudProps) {
    const { tags, shuffle, randomSeed, randomNumberGenerator } = props;
    const rng = randomSeed ? seedrandom(randomSeed.toString()) : randomNumberGenerator;
    const copy = tags.slice();
    const data = shuffle ? arrayShuffle(copy, { rng }) : copy;
    return data.map((tag) => ({
        tag,
        color: generateColor(tag, props)
    }));
}

export function TagCloud({
    renderer = defaultRenderer,
    shuffle = true,
    className = "tag-cloud",
    colorOptions = {},
    containerComponent = "div",
    ...otherProps
}: TagCloudProps): JSX.Element {
    const props = {
        renderer,
        shuffle,
        className,
        colorOptions,
        containerComponent,
        ...otherProps
    };
    const [data, setData] = useState<{ tag: Tag; color: string | undefined }[]>([]);
    const tagsComparison = props.tags.map(getTagHashCode).join(":");
    // randomize (color, shuffle) when tags or certain props change
    useEffect(() => {
        setData(randomize(props));
    }, [
        JSON.stringify(props.colorOptions),
        props.randomSeed,
        props.shuffle,
        props.disableRandomColor,
        tagsComparison
    ]);
    const other = omit(props, [...cloudPropNames, ...handlersPropNames]);
    const Container = props.containerComponent;
    return <Container {...other}>{renderTags(props, data)}</Container>;
}
