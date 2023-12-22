def toLowerCaseWithASCII(str):
    pointer = 0;
    newStrArr = [];

    while(pointer < len(str)):
        currCharCode = ord(str[pointer]);
        if(currCharCode >= 65 and currCharCode <= 90):
            newStrArr.insert(chr(currCharCode + 32));
        else:
            newStrArr.insert(str[pointer]);

    return newStrArr.join("");
