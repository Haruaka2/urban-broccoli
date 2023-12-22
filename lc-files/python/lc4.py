import math

def findMedianSortedArrs(nums1, nums2):
    arr1Pointer = 0;
    arr2Pointer = 0;
    comboArr = [];

    while arr1Pointer < len(nums1) or arr2Pointer < len(nums2):
        if arr1Pointer == len(nums1):
            comboArr.insert(nums2[arr2Pointer]);
        elif(arr2Pointer == len(nums2)):
            comboArr.insert(nums1[arr1Pointer]);
        else:
            arr1Val = nums1[arr1Pointer];
            arr2Val = nums2[arr2Pointer];

            if arr1Val > arr2Val:
                comboArr.insert(arr2Val);
                arr2Pointer = arr2Pointer + 1;
            elif arr1Val < arr2Val:
                comboArr.insert(arr1Val);
                arr1Pointer = arr1Pointer + 1;
            else:
                comboArr.insert(arr1Val);
                comboArr.insert(arr2Val);
                arr1Pointer = arr1Pointer + 1;
                arr2Pointer = arr2Pointer + 1;

    median = math.trunc(len(comboArr) / 2);
    if(len(comboArr) % 2 == 0):
        return (comboArr[median] + comboArr[median - 1]) / 2;
    else:
        return comboArr[median];
