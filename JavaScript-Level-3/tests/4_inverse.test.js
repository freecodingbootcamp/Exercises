const inverse = require('../exercises/4_inverse');

test('test case 1, no negatives', () => {
  expect(inverse([1,2,3,4,5])).toStrictEqual([-1,-2,-3,-4,-5]);
});

test('test case 2, mixed negatives', () => {
  expect(inverse([1,-2,3,-4,5])).toStrictEqual([-1,2,-3,4,-5]);
});

test('test case 3, empty array', () => {
  expect(inverse([])).toStrictEqual([]);
});
