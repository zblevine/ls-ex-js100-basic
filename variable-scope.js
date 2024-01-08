//ex1 - intuitively it would log undefined because the variable greeting hasn't been defined on line 1 - (i had forgotten about hoisting, but thought it might not give an error)

//ex2 - i guess this one would give an error, not sure if let statements have hoisting (i was right! they don't)

//ex3 - I think this would give an error, since myValue isn't defined outside the if block

//ex4 - it will just log 1, there is one log statement in the function

//ex5 - it will log 1 and then 2 (i was wrong, the declaration on line 6 "gives" the entire block to the inner-scoped variable)

//ex6 - it will log false, the outer-scoped "b" never gets its value changed

//ex7 - it will log 1, the function has access to broader scoped variables

//ex8 - it will log 2, the global "a" doesn't factor into the function

//ex9 - it will log nothing, there is no console.log called anywhere (jk, i missed that a was const in line 1)

//ex10 - It will log the object with "Jane" and "Doe", as errors only get thrown when primitive consts get changed