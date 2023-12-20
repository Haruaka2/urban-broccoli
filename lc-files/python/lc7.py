def strReverseInt (num):
    revNum = int(str(num).split("").reverse().join(""));
    isOgNumNeg = num < 0;

    if revNum > 2147483648 or revNum < -2147483648:
        return 0;
    else:
        return isOgNumNeg if 1 * revNum else revNum;
