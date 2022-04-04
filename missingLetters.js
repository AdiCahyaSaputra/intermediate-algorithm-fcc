function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.split("");
  let checkLetter = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length -1]) + 1).split("");
  
  checkLetter = checkLetter.filter(el => !str.includes(el)).join(""); // return "" jika gk match
  
  if(checkLetter) { // "" == false
    return checkLetter;
  }
  
  return undefined;
  
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));