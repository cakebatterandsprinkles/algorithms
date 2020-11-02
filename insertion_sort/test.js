const insertionSort = require("./index.js");

describe("insertionSort", () => {
  test("is a function", () => {
    expect(typeof insertionSort).toEqual("function");
  });

  test("sorts an array", () => {
    expect(insertionSort([120, -48, 12, 612, -144, 29, 0, 12, 26])).toEqual([
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
