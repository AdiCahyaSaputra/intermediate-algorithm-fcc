function whatIsInAName(collection, source) {
  const arr = [];

  // only code here
  collection.forEach(e => {
    let i = 0;
    for(let key in source) {
      if(e[key] === source[key]) {
        i += 1;
        if(i === Object.keys(source).length) {
          arr.push(e);
        }
      }
    }
  })
  // only code

  return arr;
}

console.log(whatIsInAName(
  [{
    first: "Romeo", last: "Montague"
  }, {
    first: "Mercutio", last: null
  }, {
    first: "Tybalt", last: "Capulet"
  }],
  {
    last: "Capulet"
  }
))

console.log(whatIsInAName(
  [{
    "apple": 1, "bat": 2
  }, {
    "bat": 2
  }, {
    "apple": 1, "bat": 2, "cookie": 2
  }],
  {
    "apple": 1, "bat": 2
  }
))

console.log(whatIsInAName(
 [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }],
 { "apple": 1, "cookie": 2 }
))

console.log(whatIsInAName(
 [{"a": 1, "b": 2, "c": 3}], 
 {"a": 1, "b": 9999, "c": 3}
))