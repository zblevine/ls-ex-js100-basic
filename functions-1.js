//ex1 - Sum
const sum = (p, q) => p + q;
console.log(sum(22, 10));

//ex2 - Log Quote (console log returns nothing - ah, value is undefined)
function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
}

brendanEichQuote();

//ex3 - Cite the Author
function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');

//ex4 - Squared Number
const squaredNumber = (num) => num ** 2;

console.log(squaredNumber(3));

//ex5 - Display Division
//This code will log 3 / 1 = 3, 6 / 2 = 3, etc all the way up to 30 / 10 = 3
//edit: I was sleeping at the wheel! Didn't notice the lack of parentheses on line 10

//ex6 - Three-way comparison
function compareByLength(str1, str2) {
  if (str1.length > str2.length) {
    return 1;
  } else if (str2.length > str1.length) {
    return -1;
  } else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

//ex7 - Transformation
let oldString = 'Captain Ruby';
console.log(oldString.split(' ')[0].concat(' JavaScript')); //replace would be simpler

//ex8 - Internationalization 1
function greet(code) {
  switch(code) {
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break; 
    default:
      console.log('Sup!')
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'
greet('jp'); // 'Sup!'

//ex9 - Locale Part 1

const extractLanguage = (locale) => locale.slice(0, 2) //assumes lang codes are always two chars

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

//ex10 - Locale Part 2

const extractRegion = (locale) => locale.split('_')[1].split('.')[0]

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

//ex11 - Internationalization 2

function localGreet(locale) {
  let lang = extractLanguage(locale);

  if (lang === 'en') {
    region = extractRegion(locale);
    switch(region) {
      case 'US':
        console.log('Hey!');
        break;
      case 'GB':
        console.log('Hello!');
        break;
      case 'AU':
        console.log('Howdy!');
        break;
      case 'CA':
        console.log('Hi bud!');
        break;
      default:
        console.log('Sup!')
    }
  } else {
    greet(lang);
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'