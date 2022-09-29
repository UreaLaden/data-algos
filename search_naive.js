/**
 * Define a function string search
 * Loop over the longer string
 * Loop over the shorter string
 * If the characters don't match, break out of the inner loop
 * If the characters do match, keep going,
 * increment the count of matches
 * Return the count
 */

const stringSearch = (string,pattern) => {
    let count = 0;
    for(let i=0;i<string.length;i++){
        let currentPattern = '';
        if(string[i] === pattern[0]){
            let innerIdx = 0;
            while(innerIdx < pattern.length){
                if(string[i + innerIdx] !== pattern[innerIdx]){
                    break;
                }
                else{
                    currentPattern += pattern[innerIdx];
                    innerIdx++;
                }
            }
        }
        if(currentPattern === pattern) count++;
    }
    console.log(count);
    return count;
}

t1 = performance.now()
stringSearch('zomgwomgdudeomg','omg')
t2 = performance.now()
console.log(`Runtime: ${t2-t1} seconds`)