const rotateArray = (nums, k) => {
    if(k > nums.length) {
        let counter = 0;
        while (counter < k) {
            const lastEle = nums.pop();
            nums.unshift(lastEle);
            counter++;
        }
    } else {
        const slicedArray = nums.slice(nums.length - k);
        nums.splice(nums.length - k);
        nums.unshift(...slicedArray);
    }
}
