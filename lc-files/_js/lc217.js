const isThereDupes = (nums) => {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if(hash[current] !== undefined) {
            return true;
        }
        hash[current] = 0;
    }

    return false;
}
