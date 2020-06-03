/**
 * Filters out all duplicate values.
 *
 * @example
 * [1, 2, 2, 4].filter(keepUniqueValues) // [1, 2, 4]
 *
 * @param {any} value - The current element being processed in the array.
 * @param {number} index - The index of the current element being processed in the array.
 * @param {any[]} array - The array filter was called upon.
 */
export default function keepUniqueValues(value, index, array) {
	return array.indexOf(value) === index;
}
