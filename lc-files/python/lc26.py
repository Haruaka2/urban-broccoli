def removeDupesInPlace(nums):
    uniqueNums = 1;
    for i in range(len(nums) - 1):
        if nums[i] != nums[i - 1]:
            nums[uniqueNums] = nums[i];
            uniqueNums = uniqueNums + 1;
    return uniqueNums;
