//ex1 - Greet 1
function greet(greeting = 'Hello') { //my only edit for ex1
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet(); 

//ex2 - Greet 2

function greet2(greeting = 'Hello', name = 'world') { 
  console.log(`${greeting}, ${name}!`);
}

greet2();                                // logs: Hello, world!
greet2('Salutations');                   // logs: Salutations, world!
greet2('Good morning', 'Launch School'); // logs: Good morning, Launch School!

//ex3 - Greet 3

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet3() {
  console.log(`${greeting()}, ${recipient()}!`)
}

greet3();

//ex4 - Calculate BMI

const calculateBMI = (height, weight) => (weight / (height/100)**2).toFixed(2);
console.log(calculateBMI(180, 80));

//ex5 - Calculate Cat Age

function catAge(yrs) {
  switch(yrs) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + 4*(yrs-2);
  }
}

console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));

//ex6 - Remove Last Char

const removeLastChar = (str) => str.slice(0, str.length-1);

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

//ex7 - Arrow Functions (Part 1)

const template = 'I VERB NOUN.';

const sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN',noun);

console.log(sentence('like', 'birds'));

//ex8 - Arrow Functions (Part 2)

let initGame = () => ({ level: 1, score: 0 })

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);