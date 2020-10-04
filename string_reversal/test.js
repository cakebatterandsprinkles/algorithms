const reverse = require("./index");

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse("apples")).toEqual("selppa");
});

test("Reverse reverses a string", () => {
  expect(reverse("  hello")).toEqual("olleh  ");
});
