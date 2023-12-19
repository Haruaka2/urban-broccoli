const findMedianSortedArrays = (nums1, nums2) => {
    let arr1Pointer = 0,
    arr2Pointer = 0,
    comboArr = [];

    while(arr1Pointer < nums1.length || arr2Pointer < nums2.length) {
        if(arr1Pointer === nums1.length) {
            comboArr.push(nums2[arr2Pointer]);
            arr2Pointer++;
        } else if(arr2Pointer === nums2.length) {
            comboArr.push(nums1[arr1Pointer]);
            arr1Pointer++;
        } else {
            const arr1Val = nums1[arr1Pointer];
            const arr2Val = nums2[arr2Pointer];

            if(arr1Val > arr2Val) {
                comboArr.push(arr2Val);
                arr2Pointer++;
            } else if(arr1Val < arr2Val) {
                comboArr.push(arr1Val);
                arr1Pointer++;
            } else {
                comboArr.push(arr1Val);
                comboArr.push(arr2Val);
                arr1Pointer++;
                arr2Pointer++;
            }
        }
    }

    const medIndx = Math.trunc(comboArr.length / 2);
    if(comboArr.length % 2 === 0) {
        return (comboArr[medIndx] + comboArr[medIndx - 1]) / 2;
    } else {
        return comboArr[medIndx];
    }
};

const testArr1 = [1,1,1,1,1,1,1,1,1,1,4,4];
const testArr2 = [1,3,4,4,4,4,4,4,4,4,4];
console.log("MEDIAN: ", findMedianSortedArrays(testArr1, testArr2));