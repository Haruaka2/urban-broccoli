def getIsValidParentheses(str):
    if(len(str) == 0):
        return True;
    elif(len(str) == 1):
        return False;
    else:
        tempStack = [];
        count = 0;

        while count < len(str):
            currChar = str[count];

            if currChar == "(":
                tempStack.insert(")");
            elif currChar == "{":
                tempStack.insert("}");
            elif currChar == "[":
                tempStack.insert("]");
            else:
                popped = tempStack.pop();
                if popped != str[count]:
                    return False;
            count = count + 1;
        return not(len(tempStack) > 0);
