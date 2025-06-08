function removeElement(nums,val){
    let x = 0;

    for(let i = 0; i<nums.length; i++){
         if(nums[i]!=val){
           nums[x] = nums[i]
            x = x+1; //x++
         }
    }
    return x;
}

let nums = [0,1,2,2,3,0,4,2], Val=0;
let result = removeElement(nums,Val);
console.log(result);