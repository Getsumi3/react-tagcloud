/**
 * Computes appropriate font size of tag.
 */
export const fontSizeConverter = (
    count: number,
    min: number,
    max: number,
    minSize: number,
    maxSize: number
) => {
    if (max - min === 0) {
        // handle devision by zero
        return Math.round((minSize + maxSize) / 2);
    }
    return Math.round(((count - min) * (maxSize - minSize)) / (max - min) + minSize);
};

/**
 * Creates an object composed of not omitted object properties.
 */
export const omit = (obj: { [x: string]: any }, keys: string[]) => {
    return Object.keys(obj).reduce((r, key) => {
        if (!~keys.indexOf(key)) {
            // @ts-ignore
            r[key] = obj[key];
        }
        return r;
    }, {});
};

/**
 * Creates an object composed of the picked object properties.
 */
export function pick(obj: { [x: string]: any }, keys: string[]) {
    return keys.reduce((picked, key) => {
        // @ts-ignore
        picked[key] = obj[key];
        return picked;
    }, {});
}

/**
 * Returns an array of object keys.
 */
export function keys(obj: { [x: string]: any }) {
    return Object.keys(obj);
}
