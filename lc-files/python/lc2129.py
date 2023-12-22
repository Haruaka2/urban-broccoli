def toTitleCaps(str):
    if len(str) <= 2:
        return str.casefold();
    else:
        return str.capitalize();

def capsTitle(title):
    strArr = title.split(" ");
    return map(toTitleCaps, strArr);
