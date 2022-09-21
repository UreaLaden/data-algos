
/* Cell ID: g1qwpmb8*/
/*# Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. Tremendously decreases time complexity.
*/

/* Cell ID: rxhqy486*/
const search = (arr,target) => {
  //instantiate left,right and mid variables
  let left = 0
  let right = arr.length - 1
  //return -1 for empty arrays
  if (arr.length === 0) return -1
  // loop while left < right
  while(left <= right){
    let mid = Math.floor((left + right) / 2)
    let current = arr[mid]
    //if target is < element at mid
    // mid becomes mid - 1
    if(current < target){
      left = mid+1
    }
    //if target > element at mid
    // left becomes mid + 1 
    else if(current > target){
      mid = Math.floor((left + right) / 2)
      right = mid-1      
    }
    // if target === element at mid
    else{
      return mid;
    }
  }
  //return -1
  return - 1
}
// console.log(search([1,2,3,4,5,6],4)) //3
// console.log(search([1,2,3,4,5,6],6)) //5
// console.log(search([1,2,3,4,5,6],11)) //-1
