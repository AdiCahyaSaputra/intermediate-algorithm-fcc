function fibonnaci(num) {
  const arr = [1, 1];
  for(let i = arr.length; i < num; i++) {
    const fn = arr[i - 1] + arr[i - 2];
    if(fn <= num) {
      arr.push(fn);
    }
    
  }
  
  // cari yg odd / ganjil di arr
  arr.forEach(el => {
    if(el % 2 == 0) {
      arr.splice(arr.indexOf(el), 1);
    }
  });
  
  return arr.reduce((curr, next) => next + curr);
}

console.log(fibonnaci(10));