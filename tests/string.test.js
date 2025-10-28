const { uppercase, lowercase } = require('../string');

test('uppercase function works', () => {
  expect(uppercase('hello')).toBe('HELLO');
});

test('lowercase function works', () => {
  expect(lowercase('WORLD')).toBe('world');
});