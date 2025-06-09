
function singleNumber(nums){

    let XOR = 0;

    for(let i=0; i<nums.length; i++){
        XOR = XOR^nums[i];
    }
    return XOR;
}

let nums = [3,2,3,4,2,6,6];
let result = singleNumber(nums);
console.log(result);