class SimpleQueue {
  constructor(elements) {
    this.elements = Array.isArray(elements) ? elements : [];
  }

  // Think: Push for Queues
  enqueue(value) {
    this.elements.push(value);
  }

  // Think: Pop for Queues
  dequeue() {
    this.elements.splice(0, 1);
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  clear() {
    this.elements = [];
  }

  printQueue() {
    if(this.elements.length > 0) {
      const queueStr = this.elements.join(", ");
      console.log(queueStr);
    } else {
      console.log("Empty Queue");
    }
  }
}

// Note in this stack, the first element is the last element of the array.
const testExample = new SimpleQueue();
const testFullStack = new SimpleQueue([1,2,3,4]);
testExample.printQueue();
testFullStack.printQueue();
console.log("\n");

testExample.enqueue(4);
testExample.enqueue(3);
testExample.enqueue(2);
testExample.enqueue(1);
testExample.printQueue();
console.log("\n");

testFullStack.dequeue();
testFullStack.printQueue();
testFullStack.dequeue();
testFullStack.printQueue();
testFullStack.dequeue();
testFullStack.printQueue();
testFullStack.dequeue();
testFullStack.printQueue();
console.log("\n");

console.log("Is this queue empty?", testFullStack.isEmpty());
console.log("\n");

console.log("What is the size of the queue? ", testExample.size());
testExample.clear();
console.log("Is it empty after I clear it? ", testExample.isEmpty());

