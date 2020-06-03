/**
 * Sorts the array according to `.valueOf()`.
 *
 * @example
 * [
 *   new Date(2020, 0, 4),
 *   new Date(2020, 0, 2),
 *   new Date(2020, 0, 1),
 *   new Date(2020, 0, 3),
 * ].sort(ascendingDates)
 * // [
 * //   new Date(2020, 0, 1),
 * //   new Date(2020, 0, 2),
 * //   new Date(2020, 0, 3),
 * //   new Date(2020, 0, 4),
 * // ];
 *
 * @param {Date} a - The first element for comparison.
 * @param {Date} b - The second element for comparison.
 */
export default function ascendingDates(a, b) {
	return a.valueOf() - b.valueOf();
}
