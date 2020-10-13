// Given an integer, return an integer that is the reverse ordering of numbers.

const { reverse } = require("dns");

function reverseInt1(int) {
  let reversed = int.toString().split("").reverse();
  if (reversed[reversed.length - 1] === "-" && reversed[0] !== "0") {
    reversed.pop();
    reversed.unshift("-");
    return Number(reversed.join(""));
  } else if (int === 0) {
    return 0;
  } else if (reversed[reversed.length - 1] === "-" && reversed[0] === "0") {
    reversed.pop();
    reversed.shift();
    reversed.unshift("-");
    return Number(reversed.join(""));
  } else if (reversed[0] === "0") {
    reversed.unshift();
    return Number(reversed.join(""));
  } else {
    return Number(reversed.join(""));
  }
}

function reverseInt2(int) {
  let reversed = int.toString().split("").reverse();
  if (int < 0) {
    if (Math.abs(int) % 10 === 0) {
      reversed.shift();
      reversed.pop();
      reversed.unshift("-");
    } else if (Math.abs(int) > 9 && Math.abs(int) % 10 !== 0) {
      reversed.pop();
      reversed.unshift("-");
    } else {
      return int;
    }
    return Number(reversed.join(""));
  }
  if (int >= 0) {
    return Number(reversed.join(""));
  }
}

function reverseInt3(int) {
  const reversed = int.toString().split("").reverse().join("");
  if (int < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}

// If you pass Math.sign() a positive number, it will return 1. If you pass a negative number, it will return -1.

function reverseInt4(int) {
  const reversed = int.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(int);
}

module.exports = reverseInt4;
