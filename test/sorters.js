const { assert } = require('chai');

const {
	ascendingDates,
} = require('../dist/bundle.min');

describe('Sorters', function () {
	describe('ascendingDates', function () {
		it('should sort dates starting in the past.', function () {
			let items = [
				new Date(2020, 0, 4),
				new Date(2020, 0, 2),
				new Date(2020, 0, 1),
				new Date(2020, 0, 3),
			];
			let expected = [
				new Date(2020, 0, 1),
				new Date(2020, 0, 2),
				new Date(2020, 0, 3),
				new Date(2020, 0, 4),
			];

			let result = items.sort(ascendingDates);
			assert.deepEqual(result, expected);
		});
	});
});
