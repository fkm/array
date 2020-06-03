/**
 * Filters out all undefined values.
 *
 * @example
 * [1, 2, , 4].filter(isDefined) // [1, 2, 4]
 *
 * @param {any} value - The current element being processed in the array.
 */
export default function isDefined(value) {
	return value !== undefined;
}
