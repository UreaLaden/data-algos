
/* Cell ID: 0km0u44e*/
/*/*# Multiple Pointers

### Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition*/
*/

/* Cell ID: crkyg06o*/
/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
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

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) //undefined


