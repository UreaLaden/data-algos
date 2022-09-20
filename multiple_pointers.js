
/* Cell ID: 0km0u44e*/
/*# Multiple Pointers

### Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
*/

/* Cell ID: crkyg06o*/
/**
 * Write a function called sumZero which accepts a sorted array of integers. 
 * The function should find the first pair where the sum is 0. 
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 */

 const sumZero = (arr) => {
   //Initialize a left and right pointer
  let left = 0;
  let right = arr.length - 1;
  // Enter a loop and compare the sum of the value at the left and right
  while (left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left],arr[right]];
    }
    // If the sum is greater than zero we decrement the right
    if (sum > 0){
      right--;
    }else{
      //If the sum is less than zero we increment the left
      left ++;
    }
  }
}

// console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
// console.log(sumZero([-2,0,1,3])) // undefined
// console.log(sumZero([1,2,3])) //undefined




/* Cell ID: m47169qn*/
/*
* Implement a function called countUniqueValues, which accepts a sorted 
* array, and counts the unique values in the array. There can be negative
* numbers in the array, but it will always be sorted
*/
/*# Understanding the Problem
1.  Can I restate the problem in my own words?
--> Count every unique value in a sorted array
2.  What are the inputs that go into the problem?
--> sorted array, of positive and negative numbers
3.  What are the outputs that should come from the solution to the problem?
--> integer
4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5.  How should I label the important pieces of data that are a part of the problem?
 
*/
// O(n) Time | O()
const countUniqueValues = (arr) => {
  //determine length of the array
  let count = 0
  let length = arr.length
  if (length === 0) return count
  //set left to beginning and right to end
  let left = 0
  let right = length - 1  
  // Iterate while the left is smaller than the length 
  while (left < length){
    let leftNum = arr[left];
    let rightNum = arr[right];
  //if the value at the right > value at left, decrement right
    if (rightNum > leftNum){
      right--;
    }
  //if the value at left === value at right
  // increment count and set left to right +1 and right to end
    if (leftNum === rightNum){
      count++;
      left = right + 1
      right = length - 1
    }
  }
  return count
  
}

// console.log(countUniqueValues([1,1,1,1,1,2])) //2
// show(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4


/* Cell ID: p8gft3is*/
// O(n) Time and O(1) space
const countUniqueValues_V2 = (arr) =>{
  let i = 0;
  if (arr.length === i) return i
  for(let j = 1;j<arr.length;j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues_V2([1,1,1,1,1,2])) //2
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

let t1 = performance.now()
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues_V2([1,1,1,1,1,2]) //2
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1])
let t2 = performance.now()
let t3 = performance.now()
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues_V2([1,1,1,1,1,2]) //2
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1])
let t4 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);//Time Elapsed: 0.00010000002384185791 seconds
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds`);//Time Elapsed: 0 seconds

