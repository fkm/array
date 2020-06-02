const { assert } = require('chai');

const {
	ascendingDates,
} = require('../lib');

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

			let actual = items.sort(ascendingDates);
			assert.deepEqual(actual, expected);
		});
	});
});
