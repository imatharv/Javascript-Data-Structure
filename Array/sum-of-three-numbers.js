let myArray = new Array();

myArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

console.log("The array elements are: " + myArray);

let length = myArray.length;

console.log("Three degits which returns zero after addition are,");
for(let i=0; i<length; i++){
    for(let j=i+1; j<length; j++){
        for(let k=j+1; k<length; k++){
            if((myArray[i]+myArray[j]+myArray[k]) == 0){
                console.log(myArray[i]+", "+myArray[j]+", "+myArray[k]);
            }
        }
    }
}