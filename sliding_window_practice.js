/**
 * Write a function called isSubsequence which takes in two 
 * strings and checks whether the characters in the first 
 * string form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters 
 * in the first string appear somewhere in the second string, without their order changing.
 */

/*# Understanding the Problem
1.  Can I restate the problem in my own words?
--> Write a function the returns whether the chars in the first string appear in the second in the same order
2.  What are the inputs that go into the problem?
--> 2 strings, target string should be smaller than the main string
3.  What are the outputs that should come from the solution to the problem?
--> true/false
4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5.  How should I label the important pieces of data that are a part of the problem?
*/

const isSubsequence = (target,main) =>{
    // Edge case - return false if main length < target
    if(main.length < target.length)return false;
    // Initialize a count and target index for tracking
    let count = 0;
    let targetIdx = 0;
    // Iterate through the main string
    for(let i = 0; i < main.length;i++ ){
        // Increment counter if value at targetIndex matches
        // we only increment target index when theres a match
        if(main[i] === target[targetIdx]){
            count++;
            targetIdx++;
        }
    }
    // return whether or not count matches the target length
    return count === target.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)