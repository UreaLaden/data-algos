/**
 * Write a function call power which accepts a base and 
 * and exponent. The function should return the power
 * of the base to the exponent. This function should mimic
 * the functionality of Math.pow() - do not worry about 
 * negative bases and exponents
 */

const power = (ex,base) => {
    if(base <= 1 || ex <= 0) return 1;
    return base * power(ex-1,base);
}

// console.log(power(2,0)); //1
// console.log(power(2,2)); //4
// console.log(power(2,4)); //16

/**
 * Write a function factorial which accepts a number and 
 * returns the factorial of that number. A factorial is the 
 * product of an integer and all the integers below it
 * e.g. factorial four (4!) is equal to 24, because
 * 4x3x2x1 equals 24 factorial zero (0!) is always 1
 */

const factorial = (num) => {
    //Base case num <= 0 return 1
    if(num <= 0)return 1;
    //multiply num by factorial(num - 1) 
    return num * factorial(num-1)
}

// console.log(factorial(1)) //1
// console.log(factorial(2)) //2
// console.log(factorial(4)) //24
// console.log(factorial(7)) //5040

/**
 * Write a function called productOfArray which takes in an 
 * array of numbers and returns the product of them all
 */

const productOfArray = (arr) => {
    //Base case if len array <= 0 return 1
    if(arr.length <= 0) return 1;
    //multiply arr[0] by productOfArray[1:]    
    return arr[0] * productOfArray(arr.splice(1))
}

arr = [1,2,3,10];
const prodArray = arr.reduce((acc,prev) => {
    return acc * prev
},1)
// console.log(prodArray);
// console.log(productOfArray([1,2,3])) //6
// console.log(productOfArray([1,2,3,10])) //60

/**
 * Write a function called recursiveRange which accepts a number
 * and adds up all the numbers from 0 to the number passed to the 
 * function
 */

const recursiveRange = (num) => {
    //Base case if num <= 0 return num
    if(num <= 0) return num
    //return num plus recursiveRange(num - 1)
    return num + recursiveRange(num - 1)
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 

/**
 * Write a recursive function call fib which accepts a number and returns
 * the nth number in the fibonacci sequence. Recall that the Fibonacci sequence
 * is the sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1, and
 * where every number thereafter is equal to the sum of the previous numbers
 */

const fib = (num) => {
    if(num <= 2) return 1;
    return fib(num-1) + fib(num-2);
}

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

/**
 * Write a recursive function called reverse which accepts a string and returns a 
 * new string in reverse
 */

const reverse = (word) =>{
    if(word.length === 1) return word;
    char = word.substring(word.length-1,word.length)
    return char + reverse(word.substring(0,word.length-1))
}
// const reverse = (word) => {
//     let result = ''
//     reverseHelper(word)
//     return result;
// }

// console.log(reverse('awesome')) //'emosewa'
// console.log(reverse('rithmschool')) //'loohcsmhtir
// console.log(reverse('leaundrae')) //'loohcsmhtir

/**
 * Write a recursive function called isPalindrome which returns true if the string
 * passed to it is a palindrome (reads the same forward and backward)
 */

const isPalindrome = (word) => {
    //Base case if theres only a single letter return true
    if (word.length === 1) return true;
    //If the first and last letters don't match return false
    if (word[0] !== word[word.length-1]) return false;
    //Re-execute with the first and last letters removed.
    return isPalindrome(word.substring(1,word.length-1));
}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')); // false
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// console.log(isPalindrome('amanaplanacanalpandemonium')); // false

/**
 * Write a recursive function called someRecursive which accepts an 
 * array and a callback. The function returns true if a single value in
 * the array returns true when pased to the callback. Otherwise it returns 
 * false
 */

const someRecursive = (arr,callback) =>{
    if (arr.length <= 0) return false;
    if (callback(arr[0]) === true) return true;
    return someRecursive(arr.splice(1),callback)
}

const isOdd = (num) => {
    return num % 2 !== 0;
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)); // true
// console.log(someRecursive([4,6,8], isOdd));// false
// console.log(someRecursive([4,6,8], val => val > 10));// false


/**
 * Write a recursive function called flatten which accepts an array
 * of arrays and returns a new array with all values flattened
 */

const flatten = (arr,result = []) =>{
    const flattenHelper = (arr) => {
    let counter = 0;
    while (counter < arr.length){
        if(!Array.isArray(arr[counter])){
            result.push(arr[counter])
        }
        else{
            flattenHelper(arr[counter])
        }
        counter++;
    }
    }
    flattenHelper(arr)
    return result;
}

const flatten_V2 = (arr,newArr=[]) => {
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten_V2(arr[i]))
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// t1 = performance.now()
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
// t2 = performance.now()
// console.log(`Time: ${t2-t1} seconds`)
// t1 = performance.now()
// console.log(flatten_V2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
// t2 = performance.now()
// console.log(`Time: ${t2-t1} seconds`)

/**
 * Write a recursive function called nestedEvenSUm. Return the sum
 * of all even numbers in an object which may contain nested objects
 */
const nestedEvenSum = (obj,sum=0) => {
    //Iterate through the main object
    for (var key in obj){
        //If the current value is an object add the sum with new function call
        if(typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key])
        }// if the curr value is an even number we add to the sum
        else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key]
        }
    }
    //return the sum
    return sum;
};

 var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

/**
 * Write a recursive function called capitalizeWords. Given an array
 * of words, return a new array containing each word capitalized
 */

const capitalizedWords = (words,newWords=[]) => {
    if(words.length === 0)return newWords;
    newWords.push(words[0].toUpperCase())
    return capitalizedWords(words.splice(1),newWords)
}

let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

/**
 * Write a function called stringifyNumbers which takes in a n object
 * and finds all of the values which are numbers and converts them to 
 * strings. Recursion would be a greate way to solve this!
 */

const stringifyNumbers = (obj,copy={}) => {
    for(let key in obj){
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
           copy[key] = stringifyNumbers(obj[key])
        }
        else if(typeof obj[key] === 'number'){
            copy[key] = String(obj[key])
        }else{
            copy[key] = obj[key]
        }
    }
    return copy;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

/**
 * Write a function called collectStrings which accepts an object
 * and returns an array of all the values in the object that 
 * have a typeof string
 */

const collectStrings = (obj,result=[]) => {
    for(var key in obj){
        if(typeof obj[key] === 'string'){
            result.push(obj[key])
        }else if(typeof obj[key] === 'object'){
            collectStrings(obj[key],result)
        }
    }
    return result;
}

const obj3 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj3)); // ["foo", "bar", "baz"])