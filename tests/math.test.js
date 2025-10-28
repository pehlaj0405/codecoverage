const { add, subtract } = require('../math');

test('add function works', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract function works', () => {
  expect(subtract(5, 3)).toBe(2);
});