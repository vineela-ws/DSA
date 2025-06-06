//Find Second largest number an array

function secondLargest(arr){

if(arr.length<2){
    return null;
}

 let firstLargest = -Infinity;
 let secondLargest = -Infinity;

 for(let i=0; i<arr.length; i++){
    if(arr[i]> firstLargest){
        secondLargest = firstLargest;
        firstLargest = arr[i];
    }else if(arr[i]>secondLargest && arr[i]!=firstLargest){
        secondLargest = arr[i];
    }
 }
 return secondLargest;
}

let arr = [4,8,10,20,20,7,17];
let result = secondLargest(arr);
console.log(result);