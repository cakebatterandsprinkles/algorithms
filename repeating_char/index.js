// Determine if there are repeated characters in a given string.

function repChar(str) {
  const charMap = {};
  for (char of str.split("")) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (char of Object.values(charMap)) {
    if (char > 1) {
      return true;
    }
  }
  return false;
}

module.exports = repChar;
