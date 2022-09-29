
/* Cell ID: ycm0u1ii*/
// Linear Search

/**
 * This function accepts an array and a value. Loop through
 * the array and check if the current element is equal to the 
 * value. If it is, return the index at which the element is 
 * found. If the value is never found, return -1.
 */

const linearSearch = (arr,val) => {
  for (var i=0;i<arr.length;i++){
    if(arr[i] === val){
      return i;
    }    
  }
  return -1;
}

// show(linearSearch([10, 15, 20, 25, 30], 15));
show(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
