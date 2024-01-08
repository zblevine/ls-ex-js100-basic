//ex1 - First Element (will return undefined if array empty)
function first(arr) {
  return arr[0];
}

//ex2 - Last Element
function last(arr) {
  return arr[arr.length - 1];
}

//ex3 - Add + Delete
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift()
energy.push('geothermal');
console.log(energy);

//ex4 - Alphabet
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split(''));

//ex5 - Filter
let scores = [96, 47, 113, 89, 100, 102];
console.log(scores.filter(val => (val >= 100)).length);

//ex6 - Vocabulary
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
vocabulary.forEach((subarr) => subarr.forEach((word) => console.log(word)));

//ex7 - Equality
//I predict false. the arrays are different objects even though they have the same length and elements

//ex8 - Type
//Array.isArray will do the trick

//ex9 - Travel
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(str, arr) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === str) return true;
  }
  return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

//ex10 - Passcode
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'));

//ex11 - Checking items off the grocery list
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length) {
  console.log(groceryList.shift())
}

console.log(groceryList);