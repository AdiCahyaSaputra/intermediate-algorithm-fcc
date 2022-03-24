function spinalCase(str) {
  const splitStr = str.split('');

  splitStr.forEach(el => {

    if (el === el.toUpperCase() && /[A-Z]/.test(el) && splitStr.indexOf(el) !== 0) {

      if (splitStr[splitStr.indexOf(el) -1] !== "-") {
        splitStr.splice(splitStr.indexOf(el), 1, `-${el.toLowerCase()}`)
      }

    } else if (!/[A-Za-z]/.test(el)) {
      splitStr.splice(splitStr.indexOf(el), 1, "-");
    }

  })


  str = splitStr.join("");
  str = str.toLowerCase();

  return str;
}

console.log(spinalCase("This Is Spinal Tap"));
// this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap"));
// this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show"));
// the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh"));
// teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things"));
// all-the-small-things