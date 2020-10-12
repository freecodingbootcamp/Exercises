const banjo = require('../exercises/banjo');

test('Richard plays banjo', () => {
  expect(banjo("Richard")).toStrictEqual("Richard plays banjo");
});

test('richard (lowercase) plays banjo', () => {
  expect(banjo("richard")).toStrictEqual("richard plays banjo");
});

test('Hamilton does not play banjo', () => {
  expect(banjo("Hamilton")).toStrictEqual("Hamilton does not play banjo");
});

test('Empty space does not play banjo', () => {
  expect(banjo(" ")).toStrictEqual("  does not play banjo");
});
