function myReplace(str, before, after) {
  str = str.split(" ");
  after = after.split("");

  str.forEach(el => {
    if (el === before) {
      if (before === before.toLowerCase()) {
        after[0] = after[0].toLowerCase();
      } else {
        after[0] = after[0].toUpperCase();
      }

      after = after.join("");
      str.splice(str.indexOf(el), 1, after);

      return str;
    }
  });

  return str.join(" ");
}

// case after harus banget sama kayak case before !!

// lowercase === lowercase dst..

console.log(myReplace("Let us go to the store", "store", "mall"));

// Let us go to the mall

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// He is Sitting on the couch

console.log(myReplace("I think we should look up there", "up", "Down"));

// I think we should look down there

console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));

// This has a spelling error

console.log(myReplace("His name is Tom", "Tom", "john"));

// His name is John

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

// Let us get back to more Algorithms