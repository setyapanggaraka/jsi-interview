function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
}

const fib = fibonacci(10);
console.log(fib.join(", ")); // output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
