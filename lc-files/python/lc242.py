def isValidAnagram(str1, str2):
    temp1 = str1.split("").sort().join("");
    temp2 = str2.split("").sort().join("");
    return temp1 == temp2;
