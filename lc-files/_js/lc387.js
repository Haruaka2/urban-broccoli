const repeatingChars = (s) => {
    let hash = {};
    for(let i = 0; i < s.length; i++) {
        const currChar = s.charAt(i);
        if(hash[currChar] !== undefined) {
            hash[currChar] = -1;
        } else {
            hash[currChar] = i;
        }
    }

    const values = Object.values(hash);
    for(let j = 0; j < values.length; j++) {
        if(values[j] >= 0) {
            return values[j];
        }
    }
    return -1
}
