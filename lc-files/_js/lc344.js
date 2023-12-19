const reverseStr = (s) => {
    return s.reverse();
}

const inPlaceReverse = (s) => {
    let pnter1 = 0;
    let pnter2 = s.length - 1;
    const mid = s.length / 2;

    while(pnter1 <= mid && pnter2 >= mid) {
        const temp = s[pnter2];
        s[pnter2] = s[pnter1];
        s[pnter1] = temp;

        pnter1++;
        pnter2--;
    }
}
