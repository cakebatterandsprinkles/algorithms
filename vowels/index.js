// Write a function that returns the number of vowels used in a string.
// Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.

function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}

module.exports = vowels;
