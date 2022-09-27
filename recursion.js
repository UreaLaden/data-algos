
/* Cell ID: 9mmfariv*/
/*# Recursion


### A process that calls itself


## Base Case 
The condition when the recursion ends

**This is the most important**

Different Input at each call

*/

/* Cell ID: tquinvun*/
const countDown = (num) => {
  if(num <= 0){ //  <-- Base Case
    console.log("All Done!");
    return;
  }
  console.log(num);  
  return countDown(num-1);
};
// countDown(5)

/* Cell ID: 5qkyilc3*/
const sumRange = (num)=>{
  if(num === 1)return 1; //  <-- Base Case
  return num + sumRange(num-1);
}

// console.log(sumRange(5));

/* Cell ID: 1chrvh7x*/
const factorial = (num) =>{
  if (num === 1){ //  <-- Base Case
    return 1;
  }
  return num * factorial(num - 1)
}
// show(factorial(10));

/* Cell ID: 5um894eh*/
// Helper Method Recursion

function outer(input){
  var outerScopedVariable = []

  function helper(helperInput){
    //modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)
  return outerScopedVariable;
}

const collectOddValues = (arr) => {
  let result = [];
  const helper = (helperInput) =>{
    if(helperInput.length === 0 ){
      return;
    }
    if(helperInput[0] % 2 !== 0){
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

/* Cell ID: 03q48nn6*/
// Pure Recursion

const collectOddValues_2 = (arr) => {
  let newArr = [];
  if (arr.length === 0){
    return newArr;
  }
  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// show(collectOddValues_2([1,2,3,4,5]));


/**
 * For arrays, use methods like slice, the spread operator, and concat
 * that make copies of arays so you don't mutate them.
 * 
 * Strings are immutable so we'll need to use methods like slice,substr,
 * or substring to make copies of strings
 * 
 * To make copies of objects use Objec.assign or the spread operator
 */
