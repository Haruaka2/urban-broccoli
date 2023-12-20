const removeElement = (nums, val) => {
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums[i] = "a";
        } else counter++;
    }
    nums = nums.sort();
    return counter;
}
