const palindrome = require("./index");

test("palindrome function is defined", () => {
  expect(typeof palindrome).toEqual("function");
});

test('"tacocat" is a palindrome', () => {
  expect(palindrome("tacocat")).toBeTruthy();
});

test('" tacocat" is not a palindrome', () => {
  expect(palindrome(" tacocat")).toBeFalsy();
});

test('"tacocat " is not a palindrome', () => {
  expect(palindrome("tacocat ")).toBeFalsy();
});

test('"10011001" a palindrome', () => {
  expect(palindrome("10011001")).toBeTruthy();
});

test('"Fishy" is not a palindrome', () => {
  expect(palindrome("Fishy")).toBeFalsy();
});

test('"racecar" is a palindrome', () => {
  expect(palindrome("racecar")).toBeTruthy();
});
