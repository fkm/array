const { assert } = require('chai');

const {
	isDefined,
	isNotEmptyString,
	keepUniqueValues,
	keepUniqueDates,
} = require('../dist/bundle.min');

describe('Filters', function () {
	describe('isDefined', function () {
		it('should only keep defined entries.', function () {
			let items = [1, 2, undefined, 4];
			let expected = [1, 2, 4];

			let result = items.filter(isDefined);
			assert.deepEqual(result, expected);
		});
	});

	describe('isNotEmptyString', function () {
		it('should remove empty strings.', function () {
			let items = ['a', 'b', '', 'd'];
			let expected = ['a', 'b', 'd'];

			let result = items.filter(isNotEmptyString);
			assert.deepEqual(result, expected);
		});
	});

	describe('keepUniqueValues', function () {
		it('should remove duplicate values.', function () {
			let items = [1, 2, 2, 4];
			let expected = [1, 2, 4];

			let result = items.filter(keepUniqueValues);
			assert.deepEqual(result, expected);
		});
	});

	describe('keepUniqueDates', function () {
		it('should remove duplicate dates.', function () {
			let items = [
				new Date(2020, 0, 1),
				new Date(2020, 0, 2),
				new Date(2020, 0, 2),
				new Date(2020, 0, 4),
			];
			let expected = [
				new Date(2020, 0, 1),
				new Date(2020, 0, 2),
				new Date(2020, 0, 4),
			];

			let result = items.filter(keepUniqueDates);
			assert.deepEqual(result, expected);
		});
	});
});
