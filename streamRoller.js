function steamrollArray(arr) {
  const newArr = []
  arr.map(el => {
    if(!Array.isArray(el)) {
      newArr.push(el)
    } else {
      newArr.push(...steamrollArray(el))
    }
  })
  
  return newArr
  
}

steamrollArray([
  [
    ["a"]
  ], 
  [
    ["b"]
  ]
])
steamrollArray([
  1, 
  [
    2
  ], 
  [3, 
  
    [
      
      [
        4
      ]
    ]
  ]
])