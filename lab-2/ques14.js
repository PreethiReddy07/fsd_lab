// Question 14:
// You have the following array of 5 numbers:
// const nums = [10, 20, 30, 40, 50];
// Use array destructuring to swap the first and third elements of the array and the
// second and fourth elements. Then, log the modified array.



const nums = [10, 20, 30, 40, 50];
let [a,b,c,d,e] = nums;
function rev(nums){
    [a,c]=[c,a];
    [b,d]=[d,b];
    return{a,b,c,d,e}
}

console.log(rev(nums));
[nums[0], nums[2]] = [nums[2], nums[0]]; 
[nums[1], nums[3]] = [nums[3], nums[1]];
console.log(nums);
