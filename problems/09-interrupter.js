/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// your code here!

const interrupter = interruptingWord => {
  return (sen) => {
    const split = sen.split(' ');
    let output = [];

    for (let i = 0; i < split.length * 2 - 1; i++) {
      if (i % 2 === 0) {
        output.push(split[i/2]);
      } else {
        output.push(interruptingWord);
      }
    }

    return output.join(' ');
  }
}

let rudePerson2 = interrupter("yo"); // => returns a function
debugger
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
