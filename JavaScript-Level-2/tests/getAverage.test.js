const getAverage = require('../exercises/getAverage');

test('Average of 34, 55, 89 should return 59', () => {
  expect(getAverage([34,55,89])).toStrictEqual(59);
});

test('Average of 0, 0, 0 should return 0', () => {
  expect(getAverage([0,0,0])).toStrictEqual(0);
});

test('Average of 1 should return 1', () => {
  expect(getAverage([1])).toStrictEqual(1);
});
