/**
 * Filters out all duplicate dates.
 *
 * The `.valueOf()` is used to determine if dates are equal.
 *
 * @example
 * [
 *   new Date(2020, 0, 1),
 *   new Date(2020, 0, 2),
 *   new Date(2020, 0, 2),
 *   new Date(2020, 0, 4),
 * ].filter(keepUniqueDates)
 * // [
 * //   new Date(2020, 0, 1),
 * //   new Date(2020, 0, 2),
 * //   new Date(2020, 0, 4),
 * // ]
 *
 * @param {Date} date - The current element being processed in the array.
 * @param {number} index - The index of the current element being processed in the array.
 * @param {Date[]} array - The array filter was called upon.
 */
export default function keepUniqueDates(date, index, array) {
	return array.findIndex(d => d.valueOf() === date.valueOf()) === index;
}
