const fib = require("./index");

test("Fib function is defined", () => {
  expect(typeof fib).toEqual("function");
});

test("calculates the result of fib(1) correctly", () => {
  expect(fib(1)).toEqual(1);
});

test("calculates the result of fib(2) correctly", () => {
  expect(fib(2)).toEqual(1);
});

test("calculates the result of fib(3) correctly", () => {
  expect(fib(3)).toEqual(2);
});

test("calculates the result of fib(4) correctly", () => {
  expect(fib(4)).toEqual(3);
});

test("calculates the result of fib(9) correctly", () => {
  expect(fib(9)).toEqual(34);
});

test("calculates the result of fib(39) correctly", () => {
  expect(fib(39)).toEqual(63245986);
});

test("calculates the result of fib(39) correctly", () => {
  expect(fib(39)).toEqual(63245986);
});
