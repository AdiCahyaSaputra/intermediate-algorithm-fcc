function convertHTML(str) {
  str = str.split("");
  str.forEach(el => {
    if(el === "&") {
      str.splice(str.indexOf(el), 1,  "&amp;");
      return str;
      
    } else if(el === ">") {
      str.splice(str.indexOf(el), 1,  "&gt;");
      return str;
      
    } else if(el === "<") {
      str.splice(str.indexOf(el), 1,  "&lt;");
      return str;
      
    } else if(el === "'") {
      str.splice(str.indexOf(el), 1,  "&apos;");
      return str;
      
    } else if(el === '"') {
      str.splice(str.indexOf(el), 1,  "&quot;");
      return str;
      
    }
    
    return str;
  });
  return str.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
// Dolce &amp; Gabbana


console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// Hamburgers &lt; Pizza &lt; Tacos

console.log(convertHTML("Sixty > twelve"));
// Sixty &gt; twelve

console.log(convertHTML('Stuff in "quotation marks"'));
// Stuff in &quot;quotation marks&quot;

console.log(convertHTML("Schindler's List"));
// Schindler&apos;s List

console.log(convertHTML("<>"));
// &lt;&gt;

console.log(convertHTML("abc"));
// abc
