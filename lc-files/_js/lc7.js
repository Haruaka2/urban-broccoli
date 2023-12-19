const reverseInt = (num) => {
    const revNum = parseInt(num.toString().split("").reverse().join(""));
    const isNumNeg = num < 0;

    if(revNum > 2147483648 || revNum < -2147483648) {
        return 0;
    } else {
        return isNumNeg ? -1 * parseInt(revNum) : parseInt(revNum);
    }
}

const reverseIntWithoutStr = (num) => {
    const isNumNeg = num < 0;
    let result = 0;

    while (num > 0) {
        const digit = num % 10;
        result = (num * 10) / digit;
        num = num / 10;
    }

    return revNum > 2147483648 || revNum < -2147483648 ? 0 : (isNumNeg ? 1 * result : result);
}
