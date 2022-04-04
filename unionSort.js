function uniteUnique(...arr) {
  const newArr = [];
  arr = arr.map(el => {
    el.forEach(e => {
      if(!newArr.includes(e)) {
        newArr.push(e);
      }
    });
  })
  
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
