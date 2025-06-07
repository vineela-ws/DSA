
//Example1:
function starPattern(n){
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<n; j++){
           row = row +" * "
        }
        console.log(row);
    }
}

starPattern(4);

//Example 2:

function starPattern1(m){
    for(let i=0; i<m; i++){
        let row = "";
        for(let j=0; j<=i; j++){
           row = row +" * "
        }
        console.log(row);
    }
}

starPattern1(4);

//Example 3:
function printNumbers(m){
    for(let i=0; i<m; i++){
        let row = "";
        for(let j=0; j<=i; j++){
            row = row  +(j+1);
        }
        console.log(row);
    }
}

printNumbers(5);

//Example 4:
function printNumber(k){
    for(let i=1; i<=k; i++){
        let row = "";
        for(let j=1; j<=i; j++){
            row = row +(i);
        }
        console.log(row);
    }
}

printNumber(5);

//Example 5:
function printNum(p){
    for(let i=0; i<p; i++){
        let row = "";
        for(let j=0; j<p-i; j++){
            row = row +(j+1);
        }
        console.log(row);
    }
}

printNum(5);

//Example 6:
function printN(q){
    for(let i=0; i<q; i++){
        let row = "";
        for(let j=0; j<q-i; j++){
            row = row +" * ";
        }
        console.log(row);
    }
}

printN(5);

//Example 7:
function prints(r){
    for(let i=0; i<r; i++){
        let row = "";
        //Adding empty spaces and dots
        for(let j=0; j<r-(i+1); j++){
            row = row +" . ";
        }
        //Adding Stars
         for(let k=0; k<(i+1); k++){
            row = row +" * ";
        }

        console.log(row);
    }
}

prints(5);

//Example 8:
function print(s){

    for(let i=0; i<s; i++){
        let row = ""; let toggle = 1;  
         for(let j=0; j<=i; j++){
            row = row+toggle;
            if(toggle==1){
                toggle=0
            }else{
                toggle=1
            }
        }

        console.log(row);
    }
}

print(5);

//Example 9:
function prin(t){
  let toggle = 1;  
    for(let i=0; i<t; i++){
        let row = ""; 
         for(let j=0; j<=i; j++){
            row = row+toggle;
            if(toggle==1){
                toggle=0
            }else{
                toggle=1
            }
        }
        
        console.log(row);
    }
}

prin(5);