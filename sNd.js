function destroy(arr) {
  const arg = [...arguments];
  arg.shift();
  
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(!arg.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}


console.log(destroy(
  [1, 2, 3, 1, 2, 3], 2, 3
))

console.log(destroy(
  [1, 2, 3, 5, 1, 2, 3], 2, 3
))

console.log(destroy(
  [3, 5, 1, 2, 2], 2, 3, 5
))

console.log(destroy(
  ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"
))