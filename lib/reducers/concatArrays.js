/**
 * Shallow flat operation.
 *
 * @example
 * [[1, 2], [[3], 4]].reduce(concatArrays) // [1, 2, [3], 4]
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 *
 * @param {any[]} accumulator - The accumulated value previously returned in the last invocation.
 * @param {any} value - The current element being processed in the array.
 */
export default function concatArrays(accumulator, value) {
	return accumulator.concat(value);
}
