//ex1 - falsy values are false, 0, '', undefined, null (missed -0, 0n, and NaN)

//ex2
let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No.');
}

//ex3
console.log(randomNumber ? 'Yes!' : 'No.');

//ex4
const weatherLog = (weather) => {
  if (weather === 'sunny') {
    console.log("It's a beautiful day!");
  } else if (weather === 'rainy') {
    console.log('Grab your umbrella.');
  } else {
    console.log("Let's stay inside.");
  }
}

weatherLog('rainy');
weatherLog('asdf');
weatherLog('sunny');

//ex5 - it will log 'neigh', 'tweet tweet', and '*cricket*'

//ex6
const weatherLog2 = (weather) => {
  switch(weather) {
    case 'sunny':
      console.log("It's a beautiful day!");
      break;
    case 'rainy':
      console.log('Grab your umbrella.');
      break;
    default:
      console.log("Let's stay inside.");
  }
}

weatherLog2('rainy');
weatherLog2('asdf');
weatherLog2('sunny');

//ex7 - it will log 'Yes!', false || true evaluates to true

//ex8 - it will log 'No...', true && false evaluates to false

//ex9 - $3.99, !sale evaluates to false

//ex10 - we are moving, both sides of the and statement eval to true. bonus answer is YES you need the parentheses, since && takes precedence before ||.

