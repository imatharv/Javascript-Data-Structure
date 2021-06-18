let winCount = 0;
let count = 0;
let maximum = 0;
let minimum = 10;
let minIndex, maxIndex;
let myMap = new Map();

for(let i=1; i<=6; i++){
    myMap.set(i, 0);
}
console.log("Size of the map: "+myMap.size);

while(winCount!=1){
    let diceNumber = Math.floor(Math.random()*6)+1;
    switch(parseInt(diceNumber)) {
        case 1:
            myMap.set(1, myMap.get(1) + 1);
            break;
        case 2: 
            myMap.set(2, myMap.get(2) + 1);
            break;
        case 3: 
            myMap.set(3, myMap.get(3) + 1);
            break;
        case 4: 
            myMap.set(4, myMap.get(4) + 1);
            break;
        case 5: 
            myMap.set(5, myMap.get(5) + 1);
            break;
        case 6: 
            myMap.set(6, myMap.get(6) + 1);
            break;
        default:
            console.log("Something went wrong");
            break;
    }

    if((myMap.get(1)==10) || (myMap.get(2)==10) || (myMap.get(3)==10) || (myMap.get(4)==10) || (myMap.get(5)==10) || (myMap.get(6)==10))
        winCount = 1;
    else
        continue;
}

for(let j=1; j<=6; j++){
    if(minimum>(myMap.get(j))) {
        minimum = myMap.get(j);
        minIndex = j;
    }
    if(maximum<(myMap.get(j))) {
        maximum = myMap.get(j);
        maxIndex = j;
    }
}

console.log(+maxIndex+" occured maximum number of times");
console.log(+minIndex+" occured minimum number of times");