/* ex1
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');
*/

//ex2 - number, string, boolean, object, undefined off the top of my head. (Object is not a primitive, oops! Was just non-critically thinking of types. BigInt and Symbol I'll give myself a pass on, and I had assumed typeof null = object so it wasn't a separate thing)

//ex3 - Number.MAX_VALUE would work

//ex4 - It's the same as PEMDAS. Basically evaluates to (4*5) + ((3^2)/10) = 20 + .9 = 20.9

//ex5 - milliseconds since 1/1/70!

//ex6 - getYear just returns YY (or 100 + YY), getFullYear (recommended) returns the actual year 2023 for instance.

//ex7 - array join expects one (optional) argument. if less, defaults to comma as delimiter; if more, other arguments don't do anything.

//ex8 - let's see: concat() method, + operator, `${str1}${str2}` type of syntax (template literals is apparently the name) all work

//ex9 - line 4 needs to be if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) { - if statement needs to be enclosed in parentheses

//ex10 - just tweet.length, no parentheses - length is a property, not a function