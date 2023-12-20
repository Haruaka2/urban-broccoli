const getNumFromLinkedList = (givenLl) => {
    let pointer = givenLl;
    const numArr = [];
    while(pointer != null) {
        numArr.push(pointer.val);
        pointer = pointer.next;
    }
    return BigInt(numArr.reverse().join(""));
}
const generateLL = (strNum) => {
    const head = new ListNode(strNum.charAt(strNum.length - 1), null);
    let pointer = head;
    let counter = strNum.length - 2;
    while(counter >= 0) {
        pointer.next = new ListNode(strNum.charAt(counter), null);
        pointer = pointer.next;
        counter--;
    }
    return head;
}
const addTwoNumbers = (l1, l2) => {
    const num1 = getNumFromLinkedList(l1);
    if(num1 === 0) return l2;

    const num2 = getNumFromLinkedList(l2);
    if(num2 === 0) return l1;

    const sum = num1 + num2;
    if(sum === 0) return new ListNode(0, null);
    else {
        return generateLL(sum.toString());
    }
}
