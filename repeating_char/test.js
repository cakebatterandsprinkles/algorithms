const repChar = require("./index");

test("repChar function exists", () => {
  expect(typeof repChar).toEqual("function");
});

test("Finds if any character is repeated or not", () => {
  expect(repChar("a")).toBe(false);
  expect(repChar("watcha doin'")).toBe(true);
  expect(repChar("fancy bird")).toBe(false);
});

test("Works with numbers in the string", () => {
  expect(repChar("camping101")).toBe(true);
});
