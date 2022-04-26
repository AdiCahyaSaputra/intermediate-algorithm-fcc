function sumPrimes(num) {
  const primeNum = [];
  for(let i = 1; i <= 10; i++) {
    let x = 0;
    for(let j = 1; j <= i; j++) {
      console.log(i, j, x, primeNum)
      if(i % j == 0) {
        x++;
        console.log(x)
      }
    }
    
    if(x == 2) {
      console.log("ok");
    }
  }
  
  return primeNum.reduce((curr, next) => curr + next);
}

console.log(sumPrimes(10));