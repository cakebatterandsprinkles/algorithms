// Print the n-th entry in the fibonacci series to the console.
// The fibonacci series is an ordering of numbers where each number is the sum of the two numbers that come before it.
// The first 10 numbers of fibonaccis series look like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// So, fib(9) would print 34

function fib(n) {
  let startArr = [0, 1];
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      startArr[i] = startArr[i - 1] + startArr[i - 2];
    }
  }
  return startArr[n];
}

module.exports = fib;
