// Print the n-th entry in the fibonacci series to the console.
// The fibonacci series is an ordering of numbers where each number is the sum of the two numbers that come before it.
// The first 10 numbers of fibonaccis series look like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// So, fib(9) would print 34

// Iterative solution:
function fib1(n) {
  let startArr = [0, 1];
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      startArr[i] = startArr[i - 1] + startArr[i - 2];
    }
  }
  return startArr[n];
}

// Recursive solution:
function fib2(n) {
  if (n < 2) {
    return n;
  }
  return fib2(n - 1) + fib2(n - 2);
}

// Recursive solution with memoization:

function slowfib(n) {
  if (n < 2) {
    return n;
  }
  return fib3(n - 1) + fib3(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

const fib3 = memoize(slowfib);

module.exports = fib3;
