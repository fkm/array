const { assert } = require('chai');

const {
	isDefined,
	isNotEmptyString,
	keepUniqueValues,
	keepUniqueDates,
} = require('../lib');

describe('Filters', () => {
	describe('isDefined', () => {
		it('should only keep defined entries.', () => {
			let items = [1, 2, undefined, 4];
			let expected = [1, 2, 4];

			let actual = items.filter(isDefined);
			assert.deepEqual(actual, expected);
		});
	});

	describe('isNotEmptyString', () => {
		it('should remove empty strings.', () => {
			let items = ['a', 'b', '', 'd'];
			let expected = ['a', 'b', 'd'];

			let actual = items.filter(isNotEmptyString);
			assert.deepEqual(actual, expected);
		});
	});

	describe('keepUniqueValues', () => {
		it('should remove duplicate values.', () => {
			let items = [1, 2, 2, 4];
			let expected = [1, 2, 4];

			let actual = items.filter(keepUniqueValues);
			assert.deepEqual(actual, expected);
		});
	});

	describe('keepUniqueDates', () => {
		it('should remove duplicate dates.', () => {
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

			let actual = items.filter(keepUniqueDates);
			assert.deepEqual(actual, expected);
		});
	});
});
