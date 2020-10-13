const cycling = require('../exercises/3_cycling');

test('3 hours equals 1 liter of water', () => {
  expect(cycling(3)).toStrictEqual(1);
});

test('6.7 hours equals 3 liter of water', () => {
  expect(cycling(6.7)).toStrictEqual(3);
});

test('11.8 hours equals 5 liter of water', () => {
  expect(cycling(11.8)).toStrictEqual(5);
});
