const nthPower = require('../exercises/nthPower');

test('nthPower of 3,4,5,6 and 2 should return 25', () => {
  expect(nthPower([3,4,5,6], 2)).toStrictEqual(25);
});


test('nthPower of 3,4,5,6 and 1 should return 4', () => {
  expect(nthPower([3,4,5,6], 1)).toStrictEqual(4);
});

test('nthPower of 3,4,5,6 and 0 should return 4', () => {
  expect(nthPower([3,4,5,6], 0)).toStrictEqual(1);
});


test('nthPower of 3,4,5,6 and 4 should return -1', () => {
  expect(nthPower([3,4,5,6], 4)).toStrictEqual(-1);
});
