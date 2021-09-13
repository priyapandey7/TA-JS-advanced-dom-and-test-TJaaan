const calculator = require('./calculator')
test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('subs 3 - 2 to equal 1', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

test('sums 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});
test('mul 5 * 2 to equal 10', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
test('pow 2 ** 2 to equal 4', () => {
    expect(calculator.power(2, 2)).toBe(4);
  });
test('test for factorial', () => {
    expect(calculator.factorial(5)).toBe(120);
  });