export default function concatNestedArrays(accumulator, value) {
	let next = Array.isArray(value)
		? value.reduce(concatNestedArrays, [])
		: value;

	return accumulator.concat(next);
}
