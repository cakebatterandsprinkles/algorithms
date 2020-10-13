const anagram = require("./index.js");

test("anagram function exists", () => {
  expect(typeof anagram).toEqual("function");
});

test('"world" is an anagram of "dworl"', () => {
  expect(anagram("world", "dworl")).toBeTruthy();
});

test('"Su baru!" is an anagram of "Ba rusu!"', () => {
  expect(anagram("Su baru!", "Ba rusu!")).toBeTruthy();
});

test('"Oh gosh why me" is not an anagram of "Alright, you got this!"', () => {
  expect(anagram("Oh gosh why me", "Alright, you got this!")).toBeFalsy();
});

test('"SAO" is not an anagram of "SAO 1"', () => {
  expect(anagram("SAO", "SAO 1")).toBeFalsy();
});

test('"A bird is yellow" is not an anagram of "A tarp is purple"', () => {
  expect(anagram("A bird is yellow", "A tarp is purple")).toBeFalsy();
});
