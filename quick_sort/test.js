const quickSort = require("./index.js");

describe("Quicksort", () => {
  test("is a function", () => {
    expect(typeof quickSort).toEqual("function");
  });

  test("quickSort sorts an array", () => {
    expect(quickSort([120, -48, 12, 612, -144, 29, 0, 12, 26])).toEqual([
      -144,
      -48,
      0,
      12,
      12,
      26,
      29,
      120,
      612,
    ]);
  });
});
