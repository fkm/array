const { assert } = require('chai');

const {
	concatArrays,
	concatNestedArrays,
	mergeObjects,
} = require('../lib');

describe('Reducers', function () {
	describe('concatArrays', function () {
		it('should flatten the array. (shallow)', function () {
			let items = [[1, 2], [[3], 4]];
			let expected = [1, 2, [3], 4];

			let result = items.reduce(concatArrays);
			assert.deepEqual(result, expected);
		});
	});

	describe('concatNestedArrays', function () {
		it('should flatten the array. (deep)', function () {
			let items = [[1, 2], [[3], 4]];
			let expected = [1, 2, 3, 4];

			let result = items.reduce(concatNestedArrays);
			assert.deepEqual(result, expected);
		});
	});

	describe('mergeObjects', function () {
		it('should merge all properties onto one object.', function () {
			let items = [{ a: 1 }, { b: 2 }];
			let expected = { a: 1, b: 2 };

			let result = items.reduce(mergeObjects);
			assert.deepEqual(result, expected);
		});
	});
});
