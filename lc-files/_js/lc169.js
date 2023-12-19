// Brute Force HashMap
const majorityElement = (nums) => {
    const ids = [];
    nums.forEach(num => {
        if(ids.length === 0) {
            ids.push({ key: num, val: 1})
        } else {
            const idVal = ids.find(id => id.key === num);
            if(idVal) {
                idVal.val = val + 1;
            } else {
                ids.push({ key: num, val: 1});
            }
        }
    });

    let max = ids[0];
    ids.forEach(id => {
        if(id.value > max.value) {
            max = id;
        }
    })
    return max.key;
}

// Reducers => Hashmap shortcut
const majorityEleWithReduce = (nums) => {
    result = nums.reduce((accum, current) => {
        accum[current] = (accum[current] || 0) + 1;
        return accum
    }, {});
    return Object.keys(result).reduce((accum, current) => result[accum] > result[current] ? accum : current);
}
