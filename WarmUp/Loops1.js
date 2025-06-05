for (let i=0; i<4; i++){
 console.log("Hello World " + i);
}
    console.log("--------------------------------------------");

for(let i=0; i<=4; i++){
    console.log("Hello World " + i);
}
    console.log("--------------------------------------------");

for(let i=3; i<5; i++){
    console.log("Hello World " + i);
}
    console.log("--------------------------------------------");
for(let i=2; i<9; i=i+2){
    console.log("Hello World " + i);
}
    console.log("--------------------------------------------");

    for(let i=5; i>0; i=i-1){
    console.log("Hello World " + i);
}
    console.log("------------------After---------------------");

    for(let i=5; i<4; i++){
    console.log("Hello World " + i);
}
    console.log("------------------After1---------------------");

for(let i=0; i>0; i++){
    console.log("Hello World " + i);
}
    console.log("------------------After2---------------------");

for(let i=1; i>0; i++){   //Infinite Loop
    console.log("Hello World " + i);
    if(i>10){
        break;
    }
}

function greet(i){
    console.log("Namaste!!!!!! " +i)
}

for(i=0; i<10; i++){
    greet(i);
}

//Arrays with Loops
let arr = [10,6,2,0,8,3]

let len = arr.length;

console.log(len);  // length is 6
console.log(arr[5]) //3

console.log("------------------Loop for Array---------------------");

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

let arrr = [10,6,2,0,8,3,80]

console.log("------------------Loop for Array2---------------------");

for(let i=0; i<arrr.length; i++){
    if(arrr[i]%2==0){
        console.log(arrr[i]);  //10,6,2,0,8
    }
}

console.log("------------------While Loop---------------------");

//While Loop
let n = 0;

while(n<5){
    //This is body of Loop
    console.log("Hello World");
n++;
}