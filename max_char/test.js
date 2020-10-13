const maxChar = require("./index");

test("maxChar function exists", () => {
  expect(typeof maxChar).toEqual("function");
});

test("Finds the most frequently used char", () => {
  expect(maxChar("c")).toEqual("c");
  expect(maxChar("watchadoin")).toEqual("a");
});

test("Works with numbers in the string", () => {
  expect(maxChar("eop100111")).toEqual("1");
});
