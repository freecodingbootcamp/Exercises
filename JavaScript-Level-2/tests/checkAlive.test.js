const checkAlive = require('../exercises/checkAlive');

test('return true if health is greater than 0', () => {
  expect(checkAlive(1)).toStrictEqual(true);
});

test('return false if health is 0', () => {
  expect(checkAlive(0)).toStrictEqual(false);
});

test('return false if health is less than 0', () => {
  expect(checkAlive(-4)).toStrictEqual(false);
});
