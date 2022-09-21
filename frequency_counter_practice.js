/**
 * Write a function called sameFrequency. Given two
 * positive integers, find out if the two numbers
 * have the same frequency of digits.
 * Must have Time: O(N)
 */

const sameFrequency = (num1,num2) => {
    //check to see if both numbers have the same num of digits
    //convert both numbers to objects with counts as values
    let freq1 = {}
    let freq2 = {}
    while(num1 > 0){
        let digit1 = num1 % 10
        freq1[digit1] = (freq1[digit1] || 0) + 1
        num1 = Math.floor(num1 / 10)
    }
    while(num2 > 0){
        let digit2 = num2 % 10
        freq2[digit2] = (freq2[digit2] || 0) + 1
        num2 = Math.floor(num2 / 10)
    }
    console.log(freq1)
    console.log(freq2)
    //iterate through one of the objects
    for(let digit in freq1){
        //if key and value are not the same return false
        if(freq1[digit] !== freq2[digit]){
            return false
        }
    }
    //return true
    return true;
}

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

/**
 * Implement a function called, areThereDuplicates which accepts
 * a variable number of arguments, and checks whether there are
 * any duplicates among the arguments passed in.
 */
/*
 1.  Can I restate the problem in my own words?
 --> Write a function that takes any number of arguments then returns true if there are duplicates
 2.  What are the inputs that go into the problem?
 --> strings, ints
 3.  What are the outputs that should come from the solution to the problem?
 --> true, false
 4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
 5.  How should I label the important pieces of data that are a part of the problem?
 */

 const areThereDuplicates = (...args) => {
    //get variable input
    //declare an object to old each element and counter
    let obj= {}
    //iterate through the arguments
    for (let i =0;i<args.length;i++){
        //if argument in obj return true
        if(args[i] in obj){
            return true
        }
        //otherwise add to object
        else{
            obj[args[i]] = 1
        }
    }
    //else return true
    return false
 }

// console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 