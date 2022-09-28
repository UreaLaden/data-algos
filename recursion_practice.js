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
 * Write a recursive function called capitalizeFirst. Give an array of strings
 * capitalize the first letter of each string in the array
 */

const capitalizeFirst = (arr,res=[]) => {
    for (let i=0;i<arr.length;i++){
        res.push(arr[i][0].toUpperCase().concat(arr[i].substring(1)))
    }
    return res;
}
const capitalizeFirst_Recurse = (arr,res=[]) => {
    if(arr.length <= 0) return res;
    res.push(arr[0][0].toUpperCase().concat(arr[0].substring(1)));
    return capitalizeFirst_Recurse(arr.splice(1),res)
}

console.log(capitalizeFirst_Recurse(['car','taco','banana'])); // ['Car','Taco','Banana']