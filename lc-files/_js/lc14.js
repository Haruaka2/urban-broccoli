const getLongestCommonPrefixFromArr = (strArr) => {
    let pointer = 0,
        commonPrefix = [];

    if(strArr.length === 0) return "";
    else if(strArr.length === 1) return strArr[0]
    else {
        const shortestStrLen = strArr.reduce((accum, current) => accum.length < current.length ? accum : current).length;
        let hasSearchNotEnded = true;

        while(pointer < shortestStrLen && hasSearchNotEnded) {
            const currentChar = strArr[0].charAt(pointer);
            const isCurrentCharInAllStrs = strArr.every(str => str.charAt(pointer) === currentChar);

            if(isCurrentCharInAllStrs) {
                commonPrefix.push(currentChar);
                pointer++;
            } else {
                hasSearchNotEnded = false;
            }
        }
    }

    return commonPrefix.join("");
}
