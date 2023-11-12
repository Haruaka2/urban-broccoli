class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SimpleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(value) {
        if(this.size === 0) {
            // value, next
            this.head = new Node(value, null);
            this.size++;
        } else {
            const temp = this.head;
            this.head = new Node(value, temp);
            this.size++;
        }
    }

    insertLast(value) {
        let current = this.head;
        while(current) {
            if(current.next === null) break;
            current = current.next;
        }
        current.next = new Node(value, null);
    }

    insertAt(value, position) {
        let current = this.head;
        let index = 0;
        
        while(current) {
            if(index === (position - 1)) {
                break;
            } else {
                index++;
                current = current.next;
            }
        }
        const temp = current.next;
        current.next = new Node(value, temp);
    }

    getAt(position) {
        if(position === 0) {
            return this.head.data;
        } else if(position === 1) {
            return this.head.next ? this.head.next.data : -1;
        } else {
            let current = this.head;
            let index = 0;
    
            while(current) {
                if(index === position) {
                    return current.data;
                } else {
                    index++;
                    current = current.next;
                }
            }
            return -1;
        }
    }

    removeAt(position) {
        if(position === 0) {
            if(this.head !== null) {
                this.head = this.head.next;
            } 
        } else {
            let index = 0;
            let current = this.head;
            while(current) {
                if(index === (position - 2)) {
                    const doesNextExist = current.next !== null

                    if(doesNextExist) {
                        if(current.next.next !== null) {
                            const temp = current.next.next;
                            current.next = temp;
                        } else {
                            current.next = null;
                        }
                    } else {
                        current.next = null;
                    }
                }

                index++;
                current = current.next;
            }
        }
    }

    clearList() {
        this.head = null;
    }

    printList() {
        if(this.head === null) {
            console.log("Empty List");
        } else {
            let current = this.head;
            while(current) {
                console.log(current.data);
                current = current.next;
            }
        }

    }
}

const exampleTest = new SimpleLinkedList();
exampleTest.printList();
// This should print: Empty List

exampleTest.insertFirst(5);
exampleTest.insertLast(9);
exampleTest.insertFirst(6);
exampleTest.insertLast(1);
exampleTest.insertAt(4, 2);
exampleTest.printList();
// This should print: 6, 5, 4, 9, 1

console.log("1st Element in the List: " + exampleTest.getAt(0));
console.log("2nd Element in the List: " + exampleTest.getAt(1));
console.log("3rd Element in the List: " + exampleTest.getAt(2));
console.log("4th Element in the List: " + exampleTest.getAt(3));
console.log("5th Element in the List: " + exampleTest.getAt(4));
// This should print: 6, 5, 4, 9, 1

exampleTest.removeAt(0);
exampleTest.removeAt(3);
exampleTest.removeAt(3);
exampleTest.removeAt(2);
exampleTest.printList();
// The should print: 5

exampleTest.clearList();
exampleTest.printList();
// This should print: Empty List




