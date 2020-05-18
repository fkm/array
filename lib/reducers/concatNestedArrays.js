export default function concatNestedArrays(accumulator, value) {
	if (Array.isArray(value)) {
		value = value.reduce(concatNestedArrays, []);
	}

	return accumulator.concat(value);
}
