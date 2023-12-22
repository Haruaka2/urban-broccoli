const lenOfLastWord = (str) => {
    const arr = str.trim().split(" ").filter(list => list.length > 0);
    return arr[arr.length - 1].length;
}
