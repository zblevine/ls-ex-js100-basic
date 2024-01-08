//ex1 - Length
//can just slap a .length (no parentheses!) at the end of the string, will give 43

//ex2 - ALL CAPS
//'confetti floating everywhere'.toUpperCase() works

//ex3 - Repeat

function repeat(num, str) {
  let output = '';
  for(let i = 0; i < num; i++) {
    output = output + str;
  }

  return output;
}

console.log(repeat(3, 'ha'));

//ex4 - Multiline String
let twolines = 'A pirate I was meant to be!\nTrim the sails and roam the sea!';
console.log(twolines);

//ex5 - Case-insensitive Equality
//can just do toUpperCase or toLowerCase on strings you want to compare

//ex6 - Contains Character
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(byteSequence.includes('x'));

//ex7 - Blank? Version 1
const isBlank = (str) => !str;
console.log(isBlank('    '));
console.log(isBlank(''));

//ex8 - Blank? Version 2
const isBlank2 = (str) => !(str.trim());
console.log(isBlank2('   hi  '));
console.log(isBlank2('   '));
console.log(isBlank2(''));

//ex9 - Capitaliza Words
function capitalize(str) {
  return str.split(' ').map((word) => {
    return word[0].toUpperCase().concat(word.slice(1))
  }).join(' ');
}

console.log(capitalize('launch school tech & talk'));