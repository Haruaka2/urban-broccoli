const isValidAnagram = (str1, str2) => {
    const temp1 = str1.split("").sort().join("");
    const temp2 = str2.split("").sort().join("");
    return temp1 === temp2;
}
