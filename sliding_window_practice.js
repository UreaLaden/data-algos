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

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)


/**
 * Given an array of integers and a number, write a function
 * called maxSubarraySum which finds the maximum sum of a subarray
 * with the length of the number passed to the function
 */

const maxSubarraySum = (arr,num) => {
    // edge case if arr length < num
    if(arr.length < num) return null;
    // create tempSum variable set to -Infinity
    let tempSum = 0;
    let maxSum = 0;
    // iterate through arr up to num
    for (let i = 0 ;i< num;i++){
        // increment tempSum
        maxSum += arr[i]
    }
    tempSum = maxSum;
    // second iteration through main
    for (let j = num;j<arr.length;j++){
        // at each iteration we subtract the first element index and 
        // add the current element in the loop NOTE: We never go forward only backward
        tempSum = (tempSum - arr[j - num]) + arr[j]
        // compare with tempSum and update if larger than tempSum
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
}

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null

/**
 * Write a function called minSubArrayLen which accepts two parameters -
 * an array of positive integers and a positive integer. This function
 * should return the minmal length of a contiguos subarray of which the
 * sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 */

/*# Understanding the Problem
1.  Can I restate the problem in my own words?
--> Write function that finds the smallest subarray with a sum >= second argument
2.  What are the inputs that go into the problem?
--> unsorted arr of positive ints , in int
3.  What are the outputs that should come from the solution to the problem?
--> int or 0
4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5.  How should I label the important pieces of data that are a part of the problem?
*/


//Got me
const minSubArrayLen = (arr,num) => {
    // Edge case if sum of arr < num return 0
    let sum = arr.reduce((acc,prev)=>{ return acc + prev },0);
    if (sum < num) return 0
    // Edge case if any num in arr >= num return 1
    let anyNumGreater = arr.filter(val => val > num);
    if (anyNumGreater.length > 0) return 1
    // initialize tempSum and maxSum to zero
    let maxSum = 0;
    let tempSum = 0;
    // iterate through arr incrementing tempSum until it becomes >= num
    for(let i of arr.sort((a,b)=>a-b)){
        console.log(i)
    }
    // setMaxSUm to tempSum
}


//  minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//  minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
//  minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//  minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0


/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the 
 * longest substring with all distinct characters
 */
//Also got me
const findLongestSubstring = (str) => {
    //Edge case for empty string
    if(str === '') return 0;
    //declare temp array and main
    let main = []
    let temp = {}
    //iterate through str
    for (let i = 0;i<str.length;i++){
        char = str[i];
        if (temp[char] > 0){
            // console.log(char)
            main.push(temp);
            temp = {};     
            temp[char] = 1
        }else{
            //push chars into temp arr if unique
            temp[char] = 1;        
        }
    }
    main.push(temp);
    // if char in arr push temp arr into main arr ,clear temp arr then push into temp
    //return the largest array in main 
    
    let largest = 0
    let currentLargest = []
    for(let i = 0;i<main.length;i++){
        let temp = Object.keys(main[i])
        if(temp.length > largest){
            currentLargest = temp;
            largest = temp.length;
        }
    }
    console.log('Main:',main)
    console.log('CurrentLargest: ',currentLargest)
    console.log('Largest: ',largest);
    return largest;
}

//  findLongestSubstring('') // 0
//  findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
//  findLongestSubstring('thecatinthehat') // 7
//  findLongestSubstring('bbbbbb') // 1
//  findLongestSubstring('longestsubstring') // 8
//  findLongestSubstring('thisishowwedoit') // 6