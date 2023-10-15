//-----------Numbers
const ba = new Number(12384254)
console.log(ba)
console.log(ba.toString())
console.log(ba.toString().length)
console.log(ba.toFixed(1))
console.log(ba.toPrecision(3))
console.log(ba.toLocaleString())
console.log(ba.toLocaleString('en-IN'))

//------------Maths
console.log(Math)
console.log(Math.abs(-2))
console.log(Math.round(436.65))
console.log(Math.ceil(436.65))
console.log(Math.floor(436.65))
console.log(Math.min(436.65, 9, 823490, 3789403))
console.log(Math.random()) // gives value between 0-1
console.log((Math.random() * 10) + 1) //multiplying wiht 10 as we are shifting one decimal value to right now addig 1 because we don't our value as 0 (so 0+1=1) , so here min is 1


const min = 10;
const max = 20;
console.log(Math.round((Math.random() * (max - min + 1)/*this is range */) + min/*this is min value */)) //formula as we need minimum 10 as our value