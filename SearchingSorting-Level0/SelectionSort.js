let arr = [7,1,5,4,3,2];

function selectionSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        //Find the minimum in the arr
        let min = i;
        for(let j=i+1; j<n; j++){
           if(arr[j]<arr[min]){
            min = j
           }
        }
        if(min != i){
        let temp = arr[i];
        arr[i]   = arr[min];
        arr[min] = temp;}
    }
    return arr;
}

let result = selectionSort(arr);
console.log(result);