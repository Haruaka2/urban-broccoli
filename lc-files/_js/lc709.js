const toLowerCaseWithASCII = (str) => {
    let pointer = 0;
    let newStr = [];
    while(pointer < str.length) {
        const currCharCode = str.charCodeAt(pointer);
        if(currCharCode >= 65 && currCharCode <= 90) {
            newStr.push(String.fromCharCode(currCharCode + 32));
        } else {
            newStr.push(str.charAt(pointer));
        }
        pointer++;
    }

    return newStr.join("");
}
