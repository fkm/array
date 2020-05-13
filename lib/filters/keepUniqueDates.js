export default function keepUniqueDates(date, index, array) {
	return array.findIndex(d => d.valueOf() === date.valueOf()) === index;
}
