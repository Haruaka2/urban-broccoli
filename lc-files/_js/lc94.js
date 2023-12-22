const recursiveInorder = (node, arr) => {
    if(node === null) {
        return;
    } else {
        recursiveInorder(node.left, arr);
        arr.push(node.val);
        recursiveInorder(node.right, arr);
    }
}
const inOrderLcBstTraversal = (root) => {
    const result = [];
    recursiveInorder(root, result)
    return result;
}
