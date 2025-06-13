//Binary Search is only works for Sorted Array

let arr = [-1,0,3,5,9,12];

function binarySearch(arr,target){

let left = 0;
let right = arr.length-1;

while(right>=left){
    let middle = Math.floor((left+right)/2);

    if(target === arr[middle]){
        return middle;
    }else if(target<arr[middle]){
        right = middle-1;
    }else{
        left = middle+1;
    }
}
  return -1;
}

let result = binarySearch(arr,9);
console.log(result);