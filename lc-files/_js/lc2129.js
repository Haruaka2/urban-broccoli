const capsWithBuiltInMethods = (title) => {
    const strArr = title.split(" ");
    return strArr.map(str => {
        return str.length <= 2 ? str.toLowerCase() : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join(" ");
}
