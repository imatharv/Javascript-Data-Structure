let num = 0;
let myArray = new Array();

for(let i=0; i<10; i++) {
   num = Math.floor(Math.random()*(999-100+1)+100);
   myArray.push(num);
}
console.log(myArray);

let largestNumber = myArray[0];
let secondLargestNumber = myArray[0];
let smallestNumber = myArray[0];
let secondSmallestNumber = myArray[0];

for(i=1; i<10; i++) {
    if(largestNumber<myArray[i]) {
        secondLargestNumber = largestNumber;
        largestNumber = myArray[i];
    }
    else if(secondLargestNumber<myArray[i]) {
        secondLargestNumber = myArray[i];
    }
    if(smallestNumber > myArray[i]) {
        secondSmallestNumber = smallestNumber;
        smallestNumber = myArray[i];
    }
    else if(secondSmallestNumber>myArray[i]) {
        secondSmallestNumber = myArray[i];
    }
}

console.log("Second largest number: " + secondLargestNumber);
console.log("Second smallest number: " + secondSmallestNumber);