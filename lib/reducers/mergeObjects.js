/**
 * Creates an object with all properties found in the array.
 *
 * @example
 *  [{ a: 1 }, { b: 2 }].reduce(mergeObjects) // { a: 1, b: 2 }
 *
 * @param {object} accumulator - The accumulated value previously returned in the last invocation.
 * @param {any} value - The current element being processed in the array.
 */
export default function mergeObjects(accumulator, value) {
	return Object.assign(accumulator, value);
}
