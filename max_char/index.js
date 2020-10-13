// Given a string, return the character that is most commonly used in the string.

function maxChar1(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// undefined + 1 is equal to null, which is falsy.

function maxChar2(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar2;
