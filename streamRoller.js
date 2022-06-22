function steamrollArray(arr) {
  const newArr = []
  arr.map(el => {
    if (!Array.isArray(el)) {
      newArr.push(el)
    } else {
      newArr.push(...steamrollArray(el))
    }
  })

  return newArr

}

console.log(steamrollArray([

]))

