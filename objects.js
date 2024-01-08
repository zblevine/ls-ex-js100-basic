//ex1 - Retrieve a Value (Part 1)

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);

//ex2 - Retrieve a Value (Part 2) and ex4 - Greetings From Jane

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  }
};

console.log(jane.location.country);
jane.greet('Bobby');

//ex3 - Add a Property

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 4;
fido['favorite food'] = 'steak';

console.log(fido);

//ex5 - Dot Notation vs Bracket Notation
//In the first snippet, there is a 'prefix' property; in the second snippet, the property is named 'Indian'.

//ex6 - Is it true?
//The true property is expressed as a string rather than as a boolean, so it's false by ===.

//ex7 - Car Keys

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

console.log(Object.keys(vehicle));

//ex8 - Convert an object to a nested array

let guy = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.keys(guy).map(key => [key, guy[key]])); //I had forgotten about Object.entries!

//ex9 - ...and vice versa

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

console.log(nestedArray.reduce((acc, ele) => {
  acc[ele[0]] = ele[1];
  return acc;
}, {})); //I did not know about fromEntries, either!

//ex10 - Clone

function clone(obj) {
  return Object.keys(obj).reduce((acc, ele) => {
    acc[ele] = obj[ele];
    return acc;
  }, {});
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false
console.log(person);
console.log(clonedPerson);