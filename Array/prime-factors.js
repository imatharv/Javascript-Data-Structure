const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");
let myArray = new Array();
let flag = 0;
let count = 0;
let factor;
for(let i=2;i<num;i++){
    if (num%i == 0) {
        factor = i;
        for(let j=2; j<=factor/2; j++){
            flag = 0;
            if(factor%j == 0){
                flag = 1;
                break;
            }
        }
        if(flag == 0 && factor != null){
            myArray[i] = factor;
            count = 1;
        }
    }
}

if(count == 0)
    console.log("No prime factors found except 1 and " + num);
else
    console.log("No prime factors of " + num + " are: " + myArray);

