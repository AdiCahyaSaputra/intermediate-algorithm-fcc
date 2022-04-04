function pairElement(str) {
  const arr = [];
  str = str.split("");
  str.forEach(el => arr.push([el]));
  
  arr.forEach(el => {
    el.forEach(dna => {
      if(dna === "A") {
        el.push("T");
      } else if(dna === "T") {
        el.push("A");
      } else if(dna === "C") {
        el.push("G");
      } else if(dna === "G") {
        el.push("C");
      }
    });
  })
  
  return arr;
}

// a - t begitu pun sebaliknya
// c - g begitu pun sebaliknya

// a = adenine
// t = thymine

// c = cytosine
// g = guanine

console.log(pairElement("ATCGA"));
// [ [a,t], [t,a], [c,g], [g,c], [a,t] ]

console.log(pairElement("TTGAG"));
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

console.log(pairElement("CTCTA"));
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]