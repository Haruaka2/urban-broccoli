// Need to determine how does the -1s work to keep track of position
const longestSubstrWithoutRepeat = (s) => {
    const hashmap = Array(256).fill(-1);
    let maxLen = 0;
    let start = -1;

    for(let i = 0; i < s.length; i++) {
        const currChar = s.charCodeAt(i);
        if(hashmap[currChar] > start) {
            start = hashmap(currChar);
        }
        hashmap[currChar] = i;
        maxLen = Math.max(maxLen, i - start);
    }
    return maxLen;
}
