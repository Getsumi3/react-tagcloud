/**
 * Computes appropriate font size of tag.
 */
export declare const fontSizeConverter: (count: number, min: number, max: number, minSize: number, maxSize: number) => number;
/**
 * Creates an object composed of not omitted object properties.
 */
export declare const omit: (obj: {
    [x: string]: any;
}, keys: string[]) => {};
/**
 * Creates an object composed of the picked object properties.
 */
export declare function pick(obj: {
    [x: string]: any;
}, keys: string[]): {};
/**
 * Returns an array of object keys.
 */
export declare function keys(obj: {
    [x: string]: any;
}): string[];
