/**
 * Filters out all empty strings.
 *
 * @example
 * ['a', 'b', '', 'd'].filter(isNotEmptyString) // ['a', 'b', 'd']
 *
 * @param {any} value - The current element being processed in the array.
 */
export default function isNotEmptyString(value) {
	return value !== '';
}
