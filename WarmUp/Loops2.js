
//Example 1:

//Write a function that searches for an element if an array and return the index, if the element is not present 
//then just return -1

function searchElement(arr,e){
  
    for (let i=0; i<arr.length; i++){
        if(arr[i] == e){
          return i;
        }
    }
    return -1;
}

let arr = [4,2,0,10,8,30];

let result = searchElement(arr,10);

console.log(result);

//Example 2
//Write a function that returns the number of nagative naumber in an array

function countNegativeNumbers(arrr){
  let count = 0;
  for(let i=0; i<arrr.length; i++){
       if(arrr[i]<0){
        count++;
       }
  }
  return count;
}

let arrr = [2,-9,17,0,1,-10,-4,-8];

let res = countNegativeNumbers(arrr);

console.log(res);

//Example 3

//Write a function to find largest number in Array

 function findLargest(ar){

  let largest = -Infinity;

   for (let i=0; i<ar.length; i++){
        if(ar[i]>largest){
          largest = ar[i];
        }
   }
   return largest;

 }

let ar = [2,-9,17,0,1,-10,-4,-8];

let large = findLargest(ar);
console.log(large);

//Example 4

//Write a function to find smallest number in Array
function findSmallest(ar){

  let smallest = Infinity;

   for (let i=0; i<a.length; i++){
        if(a[i]<smallest){
          smallest = a[i];
        }
   }
   return smallest;

 }

let a = [2,-9,17,0,1,-10,-4,-8];

let small = findSmallest(a);
console.log(small);