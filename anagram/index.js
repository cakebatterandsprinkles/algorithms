// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters in the same quantity.
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.

function anagram1(strA, strB) {
  // we are going to use RegExp to get rid of spaces and exclamation marks.
  let modified_strA = strA.replace(/[^\w]/g, "").toLowerCase();
  let modified_strB = strB.replace(/[^\w]/g, "").toLowerCase();
  let charMapA = {};
  let charMapB = {};
  for (let char of modified_strA) {
    charMapA[char] = charMapA[char] + 1 || 1;
  }
  for (let char of modified_strB) {
    charMapB[char] = charMapB[char] + 1 || 1;
  }

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (!charMapB[char] || charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function anagram2(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  // we are going to use RegExp to get rid of spaces and exclamation marks.
  let modified_strA = strA.replace(/[^\w]/g, "").toLowerCase();
  let modified_strB = strB.replace(/[^\w]/g, "").toLowerCase();
  let charMapA = {};
  let charMapB = {};
  for (let char of modified_strA) {
    charMapA[char] = charMapA[char] + 1 || 1;
  }
  for (let char of modified_strB) {
    charMapB[char] = charMapB[char] + 1 || 1;
  }

  for (let char in charMapA) {
    if (!charMapB[char] || charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagram2;
