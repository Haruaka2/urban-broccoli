def removeElement(nums, val):
    counter = 0;
    for i in range(len(nums) - 1):
        if nums[i] == val:
            nums[i] = "a"
        else:
            counter = counter + 1;
    nums = nums.sort();
    return counter;
