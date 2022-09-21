
/* Cell ID: k78f0j7q*/
/*# Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another. 

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.*/

/* Cell ID: iuz85w19*/
/**
 * Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n. The function should
 * calculate the maximum sum of n consecutive elements in the array. *  *  * 
 */

//Naive
const maxSubarraySum_Naive = (arr,num) =>{
  if(num > arr.length){
    return null;
  }
  let max = -Infinity;
  for(let i=0;i<arr.length - num + 1;i++){
    temp = 0;
    for(let j = 0;j < num;j++){
      temp += arr[i + j];
    }
    if(temp > max){
      max = temp;
    }
  }
  return max;
}

//Sliding Window
const maxSubarraySum = (arr,num) => {
  let maxSum = 0;
  let tempSum = 0;
  //Edge case if input array is invalid
  if(arr.length < num)return null;
  for(let i=0;i<num;i++){
    //Capture the sum of the first group
    maxSum += arr[i];
  }
  //Initialize the temp sum
  tempSum = maxSum;
  //Starting at n, iterate to the end of the array
  for(let i=num;i<arr.length;i++){
    //Subtract the first number in the group
    //Add the next number to the group
    tempSum = tempSum - arr[i - num] + arr[i];
    //Update the current max sum
    maxSum = Math.max(maxSum,tempSum);
  }
  //return the max
  return maxSum;
}

// maxSubarraySum([1,2,5,2,8,1,5],2) //10
// maxSubarraySum([1,2,5,2,8,1,5],4) //17
// maxSubarraySum([4,2,1,6],1) //6
// maxSubarraySum([4,2,1,6,2],4) //13
// maxSubarraySum([],4) // null
