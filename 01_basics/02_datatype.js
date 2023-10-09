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