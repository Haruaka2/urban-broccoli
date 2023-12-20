const fizzBuzz = (num) => {
    let tempArr = [],
        count = 0;

    while(count < num) {
        if(count % 3 === 0) {
            if(count % 5 === 0) {
                tempArr.push("FizzBuzz");
            } else {
                tempArr.push("Fizz");
            }
        } else if(count % 5 === 0) {
            tempArr.push("Buzz");
        } else {
            tempArr.push(count);
        }
    }

    return tempArr;
}
