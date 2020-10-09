const sayHello = require('../exercises/sayHello');

test('Testing empty string', () => {
  expect(sayHello("")).toStrictEqual("Good job , you just finished your first js exercise");
});

test('Testing with a valid value', () => {
  expect(sayHello("Hussain")).toStrictEqual("Good job Hussain, you just finished your first js exercise");
});
