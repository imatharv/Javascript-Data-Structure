let num = 0;
let myArray = new Array();

// getting 10 Random Numbers
for(let i=0; i<10; i++) {
   num = Math.floor(Math.random()*(999-100+1)+100);;
   myArray.push(num);
}
console.log(myArray);

//getting second largest number from array
let largest = myArray[0];
let secondLargest = myArray[0];

for(let i=0; i<10; i++) {
    if(largest<myArray[i]) {
        secondLargest = largest;
        largest = myArray[i];
    } else if(myArray[i]>secondLargest && myArray[i]!=largest) {
        secondLargest = myArray[i];
    }
}
console.log("Second maximum number: " + secondLargest)

//getting second smallest number from array
let smallest = myArray[0];
let secondSmallest = myArray[0];
for(i=0; i<10; i++) {
    if(smallest>myArray[i]) {
        secondSmallest = smallest;
        smallest = myArray[i];
    } else if(myArray[i]<secondSmallest && myArray[i]!=smallest) {
        secondSmallest = myArray[i];
    }
} 

console.log("Second minimum number: " + secondSmallest)
