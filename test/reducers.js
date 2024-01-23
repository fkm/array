const { assert } = require('chai');

const {
	concatArrays,
	concatNestedArrays,
	mergeObjects,
	sumNumbers,
} = require('../lib');

describe('Reducers', () => {
	describe('concatArrays', () => {
		it('should flatten the array. (shallow)', () => {
			let items = [[1, 2], [[3], 4]];
			let expected = [1, 2, [3], 4];

			let actual = items.reduce(concatArrays, []);
			assert.deepEqual(actual, expected);
		});
	});

	describe('concatNestedArrays', () => {
		it('should flatten the array. (deep)', () => {
			let items = [[1, 2], [[3], 4]];
			let expected = [1, 2, 3, 4];

			let actual = items.reduce(concatNestedArrays, []);
			assert.deepEqual(actual, expected);
		});
	});

	describe('mergeObjects', () => {
		it('should merge all properties onto one object.', () => {
			let items = [{ a: 1 }, { b: 2 }];
			let expected = { a: 1, b: 2 };

			let actual = items.reduce(mergeObjects, {});
			assert.deepEqual(actual, expected);
		});
	});

	describe('sumNumbers', () => {
		it('should sum all numbers of the array.', () => {
			let items = [1, 2, 3, 4, 5, 6];
			let expected = 21;

			let actual = items.reduce(sumNumbers, 0);
			assert.deepEqual(actual, expected);
		});
	});
});
