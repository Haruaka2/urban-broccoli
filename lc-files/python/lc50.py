import math

def recursivePow(x, n):
    if x == 0:
        return 0;
    elif n == 0:
        return 1;
    elif n == 1:
        return x;
    else:
        halfPow = math.floor(n/2);
        halfRes = recursivePow(x, halfPow);
        res = halfRes * halfRes;
        return x % 2 == 0 if res else res * x;

def myPow(x, n):
    result = recursivePow(x, math.abs(n));
    return n > 0 if result else 1 / result;
