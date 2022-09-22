/**
 * Write a function called averagePair. Given a sorted array of integers 
 * and a target average, determine if there is a pair of values in the 
 * array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 */

/*# Understanding the Problem
1.  Can I restate the problem in my own words?
--> Determine if any pairs avg out to the target
2.  What are the inputs that go into the problem?
--> sorted int array, float
3.  What are the outputs that should come from the solution to the problem?
--> true,false
4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5.  How should I label the important pieces of data that are a part of the problem?
*/

const averagePair = (arr,avg) => {
    // edge case for null arr  or length < 2
    if (arr.length < 2) return false;
    // set start pointer to 0, left pointer to start + 1, and right pointer to end
    let start = 0;
    let left = start + 1;
    let right = arr.length - 1;
    // iterate while left < right
    while (left < right){
        // each loop compare avg of start|left start|right and left|right
        // return true if any comparison matches avg
        avg1 = (arr[start] + arr[left]) / 2
        avg2 = (arr[start] + arr[right]) / 2
        avg3 = (arr[left] + arr[right]) / 2
        if(avg1 === avg || avg2 === avg || avg3 === avg){
            return true;
        }
        // if left|right is smaller than avg increment left
        else if(avg3 < avg){
            left++;
        }
        // if left|right is bigger than avg decrement right
        else{
            right--;
        }
    }
    return false
}

t1 = performance.now()
console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false
t2= performance.now()
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`)