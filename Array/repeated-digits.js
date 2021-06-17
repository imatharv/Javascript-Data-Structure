let myArray = new Array();

for(let i=0; i<=100; i++) {
    if((i%11)==0 && i!=0) {
        myArray.push(i);
    }  
}

console.log(myArray);