const selectionSort = require("./index");

describe("Selection sort", () => {
  test("is a function", () => {
    expect(typeof selectionSort).toEqual("function");
  });

  test("sorts an array", () => {
    expect(selectionSort([120, -48, 612, -144, 29, 0, 12, 26])).toEqual([
      -144,
      -48,
      0,
      12,
      26,
      29,
      120,
      612,
    ]);
  });

  test("does not throw an error when given an empty array", () => {
    expect(() => {
      selectionSort([]);
    }).not.toThrowError();
  });
});
