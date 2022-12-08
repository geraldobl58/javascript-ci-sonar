const myClass = require('../../src/index.js')

test("add 5 + 5 to be equal 10", () => {
    expect(myClass.sum(5, 5)).toBe(10);
});

test("add 5 * 5 to be equal 25", () => {
    expect(myClass.multiplication(5, 5)).toBe(25);
});
