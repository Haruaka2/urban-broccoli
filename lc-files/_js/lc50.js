const myPowSol = (num, pow) => {
    if(pow === 0 || num <= 1) return 1;
    else {
        const absPow = Math.abs(pow);
        let count = 1;
        let newNum = num;
        while(count < absPow) {
            newNum = newNum * num;
            count++;
        }

        return pow > 0 ? newNum : 1 / newNum;
    }
}

const recursivePow = (num, power) => {
    if(num === 0) return 0;
    else if (power === 0) return 1;
    else if (power === 1) return num;

    const halfPow = Math.floor(num / 2);
    const halfRes = recursivePow(num, halfPow);
    const res = halfRes * halfRes;
    return power % 2 === 0 ? res : res * num;
}
const myRecursivePow = (x, n) => {
    const result = recursivePow(x, Math.abs(n));
    return n > 0 ? result : 1 / result;
}
