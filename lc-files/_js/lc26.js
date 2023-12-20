const builtInRemoveDupesInArr = (nums) => {
    return nums.reduce((accum, current) => accum.includes(current) ? [...accum, current] : [], [])
}

const removingDuplicatesInPlace = (nums) => {
    const hashMap = {};
    nums = nums.map(num => {
        if(hashMap[num] === undefined) {
            hashMap[num] = true;
            return num;
        } else {
            return "_";
        }
    });
    return nums.sort();
}

const leetCodeVersion = (nums) => {
    let uniqueNums = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[uniqueNums] = nums[i];
            uniqueNums++;
        }
    }

    return uniqueNums;
}
