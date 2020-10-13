const capitalize = require("./index");

test("Capitalize is a function", () => {
  expect(typeof capitalize).toEqual("function");
});

test("capitalizes the first letter of every word in a sentence", () => {
  expect(capitalize("oh hello, i did not see you there!")).toEqual(
    "Oh Hello, I Did Not See You There!"
  );
});

test("capitalizes the first letter of every word in a sentence", () => {
  expect(capitalize("you are cute")).toEqual("You Are Cute");
});
