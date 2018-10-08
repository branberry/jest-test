const arithmetic = require('./arithmetic.js');

const sum = arithmetic.sum;

const product = arithmetic.product;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('multiplies 3 * 2 to equal 6', () => {
    expect(product(3,2)).toBe(6);
})