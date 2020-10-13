const summation = require('../exercises/5_summation');

test('argument is 2', () => {
  expect(summation(2)).toStrictEqual(3);
});

test('argument is 8', () => {
  expect(summation(8)).toStrictEqual(36);
});
