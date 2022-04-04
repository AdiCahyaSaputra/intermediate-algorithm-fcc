function pigLatin(str) {
  const consonant = [];
  str = str.split('');
  let oneTrue = 0;
  
  str.forEach(el => {
    if(oneTrue === 0) {
      if(/[aiueo]/.test(el)) {
        return oneTrue += 1;
      }
      
      // jika konsonan
      consonant.push(el);
    }
  });
  
  if(consonant.length) {
    consonant.forEach(el => {
      str.splice(str.indexOf(el), 1);
    });
    
    str.push(consonant.join("") + "ay");
    
  } else {
    str.push("way");
  }
  
  return str.join("");
  
}

console.log(pigLatin("california"));
// aliforniacay

console.log(pigLatin("paragraphs"));
// aragraphspay
console.log(pigLatin("glove"));
// oveglay
console.log(pigLatin("algorithm"));
// algorithmway
console.log(pigLatin("eight"));
// eightway
console.log(pigLatin("schwartz"));
// artzschway
console.log(pigLatin("rhythm"));
// rhythmay
