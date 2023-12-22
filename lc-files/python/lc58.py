def lenOfLastWord(str):
    arr = filter(lambda x: (x.length > 0), str.trim().split(" "));
    return len(arr[len(arr) - 1]);
