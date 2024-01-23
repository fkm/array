/**
 * Deep flat operation.
 *
 * The depth is unlimited and cannot be set.
 *
 * @example
 * [[1, 2], [[3], 4]].reduce(concatNestedArrays, []) // [1, 2, 3, 4]
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 *
 * @param {any[]} accumulator - The accumulated value previously returned in the last invocation.
 * @param {any} value - The current element being processed in the array.
 */
export default function concatNestedArrays(accumulator, value) {
	if (Array.isArray(value)) {
		value = value.reduce(concatNestedArrays, []);
	}

	return accumulator.concat(value);
}
