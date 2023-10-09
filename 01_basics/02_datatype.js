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
const myfunc = function(){
    console.log("hi")
}
myfunc()
console.log(typeof myfunc)



//+++++++++++++++++++++++++++++++++++++++++++++++++
//Memory

//# Stack Memory => Primitve here we get stacked value
let a ="shee"
let b= a
b="new"
console.log(a);
console.log(b);


//# Heap Memory => Non Primitive here we get its reference
let use = {
    email: "2@gemp.com",
    id:1
}
console.log(use);
let use2 = use
use2.id = 4
console.log(use2);