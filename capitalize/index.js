// Write a function that accepts a string.
// The function should capitalize the first letter of each word in the string then return the capitalized string.

function capitalize1(str) {
  const wordArr = [];
  for (let word of str.split(" ")) {
    let firstChar = word[0].toUpperCase();
    wordArr.push(firstChar + word.slice(1));
  }
  return wordArr.join(" ");
}

function capitalize2(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize2;
