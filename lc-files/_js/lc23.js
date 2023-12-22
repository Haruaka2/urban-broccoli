const mergeKSortedLists = (lists) => {
    lists = lists.filter(list => list?.val !== undefined);

    if(lists.length === 0) return null;
    let commonList = [];
    lists.forEach(list => {
        let pointer = list;
        while(pointer) {
            commonList.push(pointer.val);
            pointer = pointer.next;
        }
    })

    commonList = commonList.sort((a, b) => a - b);
    const newHead = new ListNode(commonList[0], null);
    let pointer = newHead;
    for(let i = 1; i < commonList.length; i++) {
        pointer.next = new ListNode(commonList[i], null);
        pointer = pointer.next;
    }

    return newHead;
}
