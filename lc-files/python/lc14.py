def getLongestCommonPrefix(strArr):
    pointer = 0;
    commonPrefix = [];

    if(len(strArr) == 0):
        return "";
    elif(len(strArr) == 1):
        return strArr[0];
    else:
        # Get Shortest Length
        shortestStrLen = len(strArr[0]);
        for i in range(len(strArr)):
            if(len(strArr[i]) < shortestStrLen):
                shortestStrLen = len(strArr[i]);

        searchNotEnded = True;
        while pointer < shortestStrLen and searchNotEnded:
            currentChar = strArr[0][pointer];
            isCharInAllStrs = True;
            for i in range(len(strArr)):
                if(strArr[i][pointer] != currentChar):
                    isCharInAllStrs = False;

            if isCharInAllStrs:
                commonPrefix.insert(currentChar);
                pointer = pointer + 1;
            else:
                searchNotEnded = False;
    return commonPrefix.join("");
