def fizzBuzz (num):
    tempArr = [];
    count = 0;

    while count < num:
        if count % 3 == 0:
            if count % 5 == 0:
                tempArr.insert("FizzBuzz");
            else:
                tempArr.insert("Fizz");
        elif(count % 5 == 0):
            tempArr.insert("Buzz");
        else:
            tempArr.push(str(count));

        count = count + 1;
    return tempArr;
