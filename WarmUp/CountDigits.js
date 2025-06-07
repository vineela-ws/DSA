//Write a function that returns the count of digits in number

function countDigits(n){
  if(n==0) return 1;
    let count = 0;
    //Converting Negative numbers to Positive
    n= Math.abs(n);
  while(n>0){
    n = Math.floor(n/10);
    count++;
  }
  return count;
}

let num =2598;
let result = countDigits(num);
console.log(result);