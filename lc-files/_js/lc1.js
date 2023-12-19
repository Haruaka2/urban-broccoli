const testArr = [1, 11, 7, 25, 19, 8, 43]

const twoSum = (sum, arr) => {
    for(let i = 0; i <= arr.length; i++) {
        for(let j = arr.length - 1; j >= i; i++) {
            if(arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]];
            }
        }
    }
}
const hashTwoSum = (sum, arr) => {
    let hash = {};
    for(let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if(hash[sum - n] !== undefined) {
            return [arr[hash[sum - n], arr[i]]]
        }
        hash[n] = i;
    }
    return [];
}

console.log("Two Sum [Array]: ", twoSum(54, testArr));
console.log("Two Sum [Hash Map]: ", twoSum(15, testArr));