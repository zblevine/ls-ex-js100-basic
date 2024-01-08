//ex1 - I expect 0, 2, 4, 6, 8, 10 (and I am right)

//ex2
for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}
console.log('Launch!');

//ex3
let greeting = 'Aloha!'
for (let i = 0; i <= 2; i++) {
  console.log(greeting)
}

/* ex4 - this one dominates my node console
for (let i = 1; i <= 100; i++) {
  console.log(i * 2);
}
*/

//ex5
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

//ex6
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i++) {
  if(cities[i] === null) {
    continue;
  }

  console.log(cities[i]);
}

//ex7
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

//ex8
let n = 1;

while (n <= 40) {
  if (n % 2) { //too fancy, lol
    console.log(n);
  }

  n += 1;
}

//ex9
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}

//ex10 - second one will log 'Woooot' once, first will not