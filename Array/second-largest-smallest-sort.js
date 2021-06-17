let num = 0;
let myArray = new Array();

for(let i=0; i<10; i++) {
   num = Math.floor(Math.random()*(999-100+1)+100);
   myArray.push(num);
}
console.log("Unsorted array: " + myArray);

let sortedArray = myArray.sort();
console.log("Sorted array: " + sortedArray);

console.log("Second smallest number: " + sortedArray[1]);
console.log("Second largest number: " + sortedArray[8]);