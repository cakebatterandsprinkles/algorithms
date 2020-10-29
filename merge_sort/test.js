const Helper = require("./index.js");
const mergeSort = Helper.mergeSort;
const merge = Helper.merge;

describe("Merge sort", () => {
  test("merge is a function", () => {
    expect(typeof merge).toEqual("function");
  });

  test("mergeSort is a function", () => {
    expect(typeof mergeSort).toEqual("function");
  });

  test("merge function can join together two sorted arrays", () => {
    const left = [0, 9];
    const right = [3, 7, 13];

    expect(merge(left, right)).toEqual([0, 3, 7, 9, 13]);
  });

  test("mergeSort sorts an array", () => {
    expect(mergeSort([120, -48, 612, -144, 29, 0, 12, 26])).toEqual([
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
});
