// Return true if the given string is a plaindrome, and false if it is not.
// Spaces and punctuation marks are not excluded.

function palindrome1(str) {
  return str.split("").reverse().join("") === str;
}

// The array helper ".every()" is used to do a boolean check on every element within an array.

function palindrome2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome2;
