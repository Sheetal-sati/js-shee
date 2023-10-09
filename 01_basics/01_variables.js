const account_Id = 1451;
let account_email = "123@gmil.com";
var accountPass = "12234";
accountCity = "Jaipur"; 

// account_Id = 2 cannot change

console.log(account_Id);

account_email = "asdasd";

console.log(account_email);

accountPass = "aaaa";

console.log(accountPass);

accountCity = "jaipur";
var my_name;

console.log(accountCity);

console.table([accountCity, accountPass, account_email, my_name])

/*
never use var
*/

let $_var=2;
let _var=2;
//let 23_var=2; wrong

console.log($_var);

// let theNumber= Number(prompt("pick a number"))
// if(!Number.isNaN(theNumber)){     //this means that if the number is number then it will maake it true and run if statement else i will be false and not show anything
//     console.log("num=" + theNumber*theNumber)
// }

// console.log(Number.isNaN(2))
let theNumber= "abcd"
console.log(!Number.isNaN(theNumber))

for (var i = 2; i<=10; i++){
    console.log(`Table for ${i}`) 
    for(var j=1; j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

let str = "123";
let num = Number(str);
console.log(num)