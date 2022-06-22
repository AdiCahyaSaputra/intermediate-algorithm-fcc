function binaryAgent(str) {
  // split space 
  const splittedStr = str.split(' ');
  const translate = [];

  for (const char of splittedStr) {
    translate.push(String.fromCharCode(parseInt(char, 2)));
  }

  return translate.join(" ");
}
