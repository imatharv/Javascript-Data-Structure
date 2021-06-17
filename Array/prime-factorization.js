const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");
let myArray = new Array();
console.log("Prime factors: ");

//Getting prime factors
function primeFactors(num) {
    for(let i=2; i<=num; i++) {
        while( num%i == 0) {
            myArray.push(i);
            num = num/i;
        }
    }
    return myArray;
}

console.log(primeFactors(num));

