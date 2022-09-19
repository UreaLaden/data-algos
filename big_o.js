
/* Cell ID: hy96v8le*/
/*# Big-O Notation

### Motivate the need for big-o notation

 *"Write a function that accepts a string input and returns a reversed copy"*

There are many different ways to do this but how can we determine which method is optimal

- Its important to have aprecise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When you code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
*/

/* Cell ID: ro80ca89*/
//Add1
//Write a function that calculates the sum of all numbers from 1 up to and including some number n

function addUpTo(n){
  let total = 0;
  for (let i=1;i<=n;i++){
    total += i;
  }
  return total
}
let t1 = performance.now();
// show(addUpTo(10000000000))
let t2 = performance.now();

show(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
// Time Elapsed: 7.032300000011921 seconds


/* Cell ID: 331y9mlg*/
//Add Two

function addUpTwo(n){
  return n * (n + 1) / 2;
}

t1 = performance.now();
// show(addUpTwo(10000000000))
t2 = performance.now();

show(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)
//Time Elapsed: 0.00019999998807907106 seconds

/* Cell ID: 4vdaqdj7*/
/*# What does better mean?
- Faster?
- Less memory-intensive?
- More readable?

## The problem with Time
- Different machines will record different times
- The *same* machine will also record different times!
- For fast algorithms, speed measurements may not be precise enough*/

/* Cell ID: ryfx4tid*/
/*# Big O Definition

 - f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different

Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2

But regardless of the exact number or operations grows roughly *proportionally with n*

If *n* doubles, the number of operations will also roughly double
*/

/* Cell ID: ouygg7ow*/
const addUp = (n) => n * (n + 1) / 2;
//                     ^    ^    ^  < -- Always 3 operations O(1)

const countUpAndDown = (n) =>{
  console.log('Going Up!');
  for (let i =0;i< n;i++){
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for(let j=n-1;j>=0;j--){
    console.log(j);
  }
  console.log("Back down.Bye!")
}

// countUpAndDown(10)

function printAllPairs(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
      console.log(i,j);
    }
  }
}

// printAllPairs(7)
// O(n) operation inside of an O(n) operation ==> O(n^2)

/* Cell ID: cd35f8y8*/
/*Simplifying Big-O notaitons

- Constants Don't matter
|--|--|
|--|--|
|O(2n)|O(n)|
|O(500)|O(1)|
|O(13n^2)|O(n^2)|

### Smaller Terms Don't Matter

|--|--|
|--|--|
|O(n + 10)|O(n)|
|O(1000n + 50)|O(n)|
|O(n^2 + 5n + 8)|0(n^2)|

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop
*/

/* Cell ID: jml9q8jf*/
const logAtLeast5 = (n) => {
  for (var i=1; i<= Math.max(5,n); i++){
    console.log(i);
  }
}

// logAtLeast5(5) // Big O => O(n) as n grows so will Big O

/* Cell ID: hll8l3im*/
/*# Understanding Space Complexity

 - Most primitives are constant space (booleans,numbers, underfined,null)
- Strings require O(n) space (where n is the length of the string)
- Reference types are generally O(n) where n is the length of the array or the number of keys (for objects)*/

/* Cell ID: cdz5oiob*/
function sum(arr){
  let total = 0; //<--  1 variable
  for(let i =0;i< arr.length;i++){ // <--  another variable
    total += arr[i];
  }
  return total;
}
// Constant space

function double(arr){
  let newArr =[];
  for (let i=0;i< arr.length;i++){
    newArr.push(2 * arr[i]); // <-- Space is proportionate to the size of the array --> O(n)
  }
  return newArr;
}

show(double([1,2,3])) 

/* Cell ID: rhlipb5r*/
/*# Logarithms

A logarithm is the inverse of exponentiation

log_2(8) = 3 <-- To what power gives us 8: 3

log_2(value) = exponent => 2^exponent = value

log === log_2 // We'll omit the 2

**The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.**

   8 / 2

-> 4 / 2

-> 2 / 2
-> 1

log(8) = 3




*/
