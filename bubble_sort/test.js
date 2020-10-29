const bubbleSort = require("./index");

describe("Bubble sort", () => {
  test("is a function", () => {
    expect(typeof bubbleSort).toEqual("function");
  });

  test("sorts an array", () => {
    expect(bubbleSort([120, -48, 612, -144, 29, 0, 12, 26])).toEqual([
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
      bubbleSort([]);
    }).not.toThrowError();
  });
});
