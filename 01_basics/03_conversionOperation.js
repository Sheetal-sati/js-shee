"use strict"
let age = true;
// let age = null;
// let age = undefined;

console.log(typeof age);
console.log(typeof (age));

let valueIn = Number(age) // changing the datatype

console.log(typeof valueIn);
console.log( valueIn);

//"33" => 33
//"33abc" => NAN
// null => 0
//undefined => NAN

let a ="1";
let c = Boolean(a);  // changing the datatype
console.log(c) //true

//"" => false 
// "hi" =>true

let d = 345.456
let e = String(d)
console.log( e) //true
console.log(typeof e) //true

/**** Operations *****/
// console.log(2>1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);
// console.log("2">=1);

// console.log(null>=0);
// console.log(null==0);

// let va= 3
// let nva =-va
// console.log(nva); 

// let str = "hi"
// let str2 = " shee"
// console.log(str + str2);
// console.log("2" + 1);
// console.log(2+2 + "4");

let nu1 =100;
console.log(nu1++); // postfix
console.log(++nu1); //prefix

let x = 3;
const y = ++x;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:4"

console.log(null <= 0) //In JavaScript, when you use the (<=) operator to compare values, and one of the values is null, JavaScript attempts to convert null to a numeric value. When null is converted to a number, it becomes 0.

console.log(null == 0) // == operator checks for equality after performing type coercion if the operands have different types. When comparing null and 0, they are of different types: null is of type object, and 0 is of type number.

console.log(undefined <= 0) 
console.log(undefined == 0)

console.log("as" >= 0) 
console.log("as" == 0)
//avoid above type of conversions as this create ambiguity

