const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
	expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
	expect(lib.avg([-5, 5])).toBe(0);
});

test("factorial function(fact()) test", () => {
	expect(lib.fact(0)).toBe(1);
	expect(lib.fact(1)).toBe(1);
	expect(lib.fact(2)).toBe(2);
	expect(lib.fact(3)).toBe(6);
	expect(lib.fact(4)).toBe(24);
	expect(lib.fact(5)).toBe(120);
	expect(lib.fact(6)).toBe(720);
	expect(lib.fact(7)).toBe(5040);
	expect(lib.fact(8)).toBe(40320);
	expect(lib.fact(9)).toBe(362880);
	expect(lib.fact(10)).toBe(3628800);
	expect(lib.fact(11)).toBe(39916800);
	expect(lib.fact(12)).toBe(479001600);
	expect(lib.fact(13)).toBe(6227020800);
	expect(lib.fact(14)).toBe(87178291200);
	expect(lib.fact(15)).toBe(1307674368000);
});

test("prime function(prime()) test", () => {
	expect(lib.prime(1)).toBe(false);
	expect(lib.prime(2)).toBe(true);
	expect(lib.prime(3)).toBe(true);
	expect(lib.prime(4)).toBe(false);
	expect(lib.prime(5)).toBe(true);
	expect(lib.prime(6)).toBe(false);
	expect(lib.prime(7)).toBe(true);
	expect(lib.prime(8)).toBe(false);
	expect(lib.prime(9)).toBe(false);
	expect(lib.prime(10)).toBe(false);
	expect(lib.prime(11)).toBe(true);
	expect(lib.prime(12)).toBe(false);
	expect(lib.prime(13)).toBe(true);
	expect(lib.prime(14)).toBe(false);
	expect(lib.prime(15)).toBe(false);
	expect(lib.prime(100)).toBe(false);
	expect(lib.prime(101)).toBe(true);
	expect(lib.prime(1013)).toBe(true);
	expect(lib.prime(1015)).toBe(false);
	expect(lib.prime(2027)).toBe(true);
	expect(lib.prime(2031)).toBe(false);
	expect(lib.prime(10987)).toBe(true);
});
