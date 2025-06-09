

function moveZeros(nums){
    let x = 0;

    for(let i = 0; i<nums.length; i++){
         if(nums[i]!==0){
            nums[x] = nums[i];
            x++;
         }
    }
    //fill all the remaining elements to Zero
    for(let i=x; i<nums.length; i++){
        nums[i]=0;
    }
    return nums;
}

let nums = [0,1,13,2,0];
let result = moveZeros(nums);
console.log(result);
