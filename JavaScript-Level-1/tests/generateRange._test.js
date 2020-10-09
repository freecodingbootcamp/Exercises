const generateRange = require('../exercises/generateRange');

test('generate numbers from 1 to 10 in increments of 1', () => {
  expect(generateRange(1, 10, 1)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('generate numbers from 2 to 4 in increments of 2', () => {
  expect(generateRange(2, 4, 2)).toStrictEqual([2,4]);
});

test('generate numbers from 1 to 100 in increments of 0', () => {
  expect(generateRange(1, 100, 0)).toStrictEqual([]);
});

test('generate numbers from 0 to 10 in increments of 4', () => {
  expect(generateRange(0, 10, 4)).toStrictEqual([0, 4, 8]);
});
