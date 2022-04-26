function dropElements(arr, func) {
  let newArr = [];
  arr.forEach(el => {
    if(func(el) && newArr.length === 0) {
      newArr = arr.slice(arr.indexOf(el), arr.length);
    }
  });
  
  return newArr;
}

console.log(dropElements([1, 2, 3, 4, 5, 6, 7], function(n) {return n >= 3;}));

// [3, 4]