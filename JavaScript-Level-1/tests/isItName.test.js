const isItName = require('../exercises/isItName');

test('Testing empty string', () => {
  expect(isItName("")).toStrictEqual("Ola Universe");
});

test('Testing null value', () => {
  expect(isItName()).toStrictEqual("Ola Universe");
});

test('Testing empty space', () => {
  expect(isItName(" ")).toStrictEqual("Ola  ");
});

test('Testing a string with characters', () => {
  expect(isItName("David")).toStrictEqual("Ola David");
});
