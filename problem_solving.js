
/* Cell ID: yep97w7r*/
/*# What is an Algorithm

A **process** or **set of steps** to accomplish a certain task.

## How to improve

1. Devise a plan for solving problems
2. Master common problem solving patterns

### Problem solving strategies

1. Understand the Problem
2. Explore concrete examples
3. Break It Down
4. Solve / Simplify
5. Look Back and Refactor

#### Reference:

[George Polya - *How to Solve It*](https://www.amazon.com/How-Solve-Mathematical-Penguin-Science-dp-0140124993/dp/0140124993/ref=mt_other?_encoding=UTF8&me=&qid=1663579107)

*/

/* Cell ID: 9ce0tq56*/
/*# Understanding the Problem
1.  Can I restate the problem in my own words?
2.  What are the inputs that go into the problem?
3.  What are the outputs that should come from the solution to the problem?
4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5.  How should I label the important pieces of data that are a part of the problem?
*/

/* Cell ID: 5otd8vxh*/
/**
 * Example: Write a function which takes two numbers and returns their sum
 * 
 * Can I restate the problem in my own words?
 * --> "Write a function that adds two numbers"
 * What are the inputs that go into the problem?
 * --> - ints?
 * --> - floats?
 * --> - what about string for large numbers?
 * What are the outputs that should come from the solution to the problem?
 * --> - int? float? string?
 * Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
 * How should I label the important pieces of data that are a part of the problem?
*/

/* Cell ID: qrpamy48*/
/*# Explore Examples

## Coming up with examples can help you understand the problem better. Example also provide sanity checks that your eventual solution works how it should

- Start with Simple Examples
   - The easiest examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
   - Explore Examples with Invalid Inputs


## *"Write a function which takes in a string and returns counts of each character in the string"**/

/* Cell ID: e7kydtoq*/
/**
 * "Write a function which takes in a string and returns counts of each character in the string"
 */

//Examples
const charCount = (str) => {}
charCount("aaaa"); // {a:4}
charCount("hello"); //{h:1,e:1,l:2,o:1}

charCount("my phone number is 182564") // How about numbers
charCount("Helo hi") // How should we approach different capitalizations
charCount(""); //What about null or empty input

/* Cell ID: oltm4gq3*/
/*# Break It Down

### *Explicitly write out the steps you need to take*
This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details as well.

"Write a function which takes in a string and returns counts of each character in the string"*/

/* Cell ID: hx8javyp*/
/**
 * "Write a function which takes in a string and returns counts of each character in the string"
 */

//Examples

charCount("aaaa");
/*{
  a:4
  }
*/
charCount("hello"); //{h:1,e:1,l:2,o:1}
/**
 * {
 *  h:1,
 *  e:1,
 *  l: 2,
 *  o:1
 * }
 */
charCount("Your PIN number is 1234!")
/**
 * {
 *  Y:1,
 *  o:1,
 *  u:2,
 *  r:2,
 *  P:1,
 *  I:2,
 *  N:2,
 *  m:1,
 *  b:1,
 *  e:1, 
 *  s:1, 
 *  1:1,
 *  2:1,
 *  3:1,
 *  4:1
 *  }
 */
charCount("Hello hi")
/**
 * {
 *  H:2,
 *  e:1,
 *  l:2,
 *  o:1,
 *  i:1
 * } */ 
charCount(""); 

const charCount_Test = (str) =>
{
  //do something
  //return an object with keys that are lowercase alphanumeric
  // characters in the string; values should be the lowercase
}

const charCount_Test_2 = (str) =>
{
  // make object to return at end
  // loop over string, for each character...
    // if the char is a number/letter AND is a key in object, add 1 to count
    // if the char is number/letter AND is not in object, add it to the object and set value to 1  
    // if character is something else (space, period,etc.) don't do anything
  // return object at end
}

/* Cell ID: x0t65wrg*/
/*# Solve the Problem
*If you can't...*
## Solve a Simpler Problem

### Simplify
- Find the core difficulty in what you're trying to do
- Templorarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in*/

/* Cell ID: qumn6l26*/

const charCount_Basic = (str) =>
{
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i=0;i<str.length;i++){
    var char = str[i].toLowerCase()
    if (result[char] > 0){
    // if the char is a number/letter AND is a key in object, add 1 to count
      result[char]++;
    }else{
    // if the char is number/letter AND is not in object, add it to the object and set value to 1  
      result[char] = 1;
    }
  }
    // if character is something else (space, period,etc.) don't do anything
  // return object at end
  return result
}

show(charCount_Basic("Hi there!"))

/* Cell ID: paki6px7*/
/*# Look Back & Refactor

### Refactoring questions:
- [ ] Can you check the result?
- [ ] Can you derive the result differently?
- [ ] Can you understand it at a glance?
- [ ] Can you use the result or method for some other problem?
- [ ] Can you improve the performance of your solution?
- [ ] Can you think of other ways to refactor?
- [ ] How have other people solved this problem?*/

/* Cell ID: p87v4842*/
const charCount_Simplified = (str) =>
{
  var result = {};
  for (var i=0;i<str.length;i++){
    var char = str[i].toLowerCase()
    if(/[a-z0-9]/.test(char)){
      if (result[char] > 0){
        result[char]++;
      }else{
        result[char] = 1;
      }
    }
  }
  return result
}

const charCount_Simplified_Re_1 = (str) =>
{
  var result = {};
  for (var char of str){
    var char = char.toLowerCase()
    if(/[a-z0-9]/.test(char)){
      result[char] = ++result[char] || 1;
    }
  }
  return result
}
// show(charCount_Simplified_Re("Your PIN number is 1234!"))

const isAlphaNumeric = (char) =>{
  var code = char.charCodeAt(0);
  if( !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)){ // lower alpha (a-z)
    return false;
  }
  return true;
}


const charCount_Simplified_Re_2 = (str) =>
{
  var result = {};
  for (var char of str){
    if(isAlphaNumeric(char)){
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result
}

show(charCount_Simplified_Re_2("Hello WORLD hi!!!!"))
