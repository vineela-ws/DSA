//Recurstion & Callback

//Recurstion: Function calls itself to solve smaller versions of the same problem
//Two parts of the Recurstion:

//1.BaseCase: Stop Condition (When to stop calling itself)
//2.Recursive case: part where function calls itself

//Common Mistakes

//1.Missing base case --> It leads to stackoverflow
//2.Not Simplyfying the input --> Never reaches the base case
//3.Too Deep Recursion --> Larger Inputs
//4.Keeping in mind the Time Complexity

//When to use Recurstion
//1.Problem can be broken to Sub Problems
//2.Trees & Graphs
//3.Back Tracking ,DP, Divide&Conquer


function fun(num){
    if(num==0){
      return;
    }
    console.log(num);
    num=num-1;
    fun(num);
}

let a =10;
fun(a);

//Print n to 1  using Recurstion

function print(n){
    if(n<1){
      return;
    }
    console.log(n);
    print(--n);
}

print(5);

//Print 1 to n  using Recurstion

function printS(x){
  let n=10;
    if(x>n){
      return;
    }
    console.log(x);
    printS(++x);
}

printS(1);
