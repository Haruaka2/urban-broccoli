const firstUniqueOccurInStr = (haystack, needle) => {
    return haystack.indexOf(needle);
}

const noBuiltInFirstUniqueOccur = (haystack, needle) => {
    if(needle.length === 0) return 0;
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        let isFound = true;
        for(let j = 0; j < needle.length; j++) {
            if(haystack[i + j] !== needle[j]) {
                isFound = false;
                break;
            }
        }

        if(isFound) return i;
    }

    return -1;
}
