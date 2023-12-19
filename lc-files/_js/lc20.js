const getIsValidParentheses = (str) => {
    if(str.length === 0) return true;
    else if(str.length === 1) return false;
    else {
        const tempStack = [];
        let count = 0;
        
        while(count < str.length) {
            const theCharAt = str.charAt(count);
            if(theCharAt === "(") {
                tempStack.push(")");
            } else if (theCharAt === "{") {
                tempStack.push("}");
            } else if (theCharAt === "[") {
                tempStack.push("]");
            } else {
                const popped = tempStack.pop();
                if(popped !== str[count]) return false;
            }

            count++;
        }

        return !(tempStack.length > 0);
    }
}