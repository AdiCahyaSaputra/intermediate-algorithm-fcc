function sumPrimes(num) {
  const primeNum = [];
  for (let i = 1; i <= num; i++) {
    let x = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        x++;
      }
    }

    if (x == 2) {
      primeNum.push(i);
    }
  }

  return primeNum.reduce((curr, next) => curr + next);
}

console.log(sumPrimes(10));
