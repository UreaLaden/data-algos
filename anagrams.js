
/* Cell ID: xspysfoo*/
/**
 * Given two strings, write a function to determine if the second
 * string is an anagram of teh first. An anagram is a word, phrase,
 * or name formed by rearranging the letters of another, such as cinema,formed from iceman
 */


const validAnagram = (str1,str2) => {
  if (str1.length !== str2.length)return false;

  let freqCounter1 = {}
  let freqCounter2 = {}

  for (let val of str1){
    freqCounter1[val] = (freqCounter1[val] || 0) + 1
  }
  for (let val of str2){
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }
  // console.log(freqCounter1)
  // console.log(freqCounter2)
  for(let key in freqCounter1){     
     if(!(key in freqCounter2)){
       return false
     }
     if(freqCounter2[key] !== freqCounter1[key]){
       return false;
     }
  }
  
  return true; 
}

console.log(validAnagram('','')) //true
console.log(validAnagram('aaz','zza')) //false
console.log(validAnagram('anagram','nagaram')) //true
console.log(validAnagram('rat','car')) //false
console.log(validAnagram('awesome','awesom')) //false
console.log(validAnagram('qwerty','qeywrt')) //true
console.log(validAnagram('texttwisttime','timetwisttext')) //true

const validAnagram_V2 = (first,second) => {
  if(first.length !== second.length)return false;
  const lookup = {};
  for(let i=0;i<first.length;i++){
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for(let i=0;i<second.length;i++){
    let letter = second[i];
    if(!lookup[letter]){
      return false;
    }else{
      lookup[letter] -= 1;
    }
  }
  return true;
}
