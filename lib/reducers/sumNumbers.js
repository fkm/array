/**
 * Sum all values.
 *
 * @example
 * [1, 2, 3].reduce(sumNumbers, 0) // 6
 *
 * @param {number} accumulator - The accumulated value previously returned in the last invocation.
 * @param {number} value - The current element being processed in the array.
 */
export default function sumNumbers(accumulator, value) {
	return accumulator + value;
}
