"use strict";   //treat all JS code as newer version

//alert(3+3); // this will work in broswer console but node.js has different of writing alert

let name = "hitesh"
let age = 30
let isLog = false

//number => 2 to power 53
//null => standalone value; saying intentionally the value is empty
//undefined => might define in future
//symbol => used to define if unique 

console.log(typeof null);
// why null is an object?

//Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. 
//Javascript engine infers what type this variable is based on the value assigned to at run time.

//# Primitive datatype => String, Number,  Boolean, Null, Undefined, Symbol, BigInt
//# Reference Type/Non-Primitive datatype =? Array, Object, Functions
const myfunc = function () {
    console.log("hi")
}
myfunc()
console.log(typeof myfunc)



//+++++++++++++++++++++++++++++++++++++++++++++++++
//Memory

//# Stack Memory => Primitve here we get stacked value
let a = "shee"
let b = a
b = "new"
console.log(a);
console.log(b);


//# Heap Memory => Non Primitive here we get its reference
let use = {
    email: "2@gemp.com",
    id: 1
}
console.log(use);
let use2 = use
use2.id = 4
console.log(use2);

console.log(`hello ${use2}`)

const fname = "shee"
const repoCount = 50
console.log(fname + repoCount + "value")

const gamename = new String(' hi-shee-hitsh')

// const newS = gamename.substring(2,4)
// console.log(newS);

const newA = gamename.slice(3, -1)
console.log(newA);

console.log(gamename.trimStart());
console.log(gamename.anchor('-', ''));
console.log(gamename.split('-'));


const sentence = 'The quick brown fdox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
const strings = [
    // Lone leading surrogate
    "ab\uD800d",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.isWellFormed());
  }