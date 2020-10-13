const doubleInteger = require('../exercises/doubleInteger');

test('return 4 when argument is 2', () => {
  expect(doubleInteger(2)).toStrictEqual(4);
});

test('return 0 when argument is 0', () => {
  expect(doubleInteger(0)).toStrictEqual(0);
});

test('return 2 when argument is 1', () => {
  expect(doubleInteger(1)).toStrictEqual(2);
});

test('return -10 when argument is -5', () => {
  expect(doubleInteger(-5)).toStrictEqual(-10);
});
