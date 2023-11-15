class SimpleStack {
  constructor(elements) {
    this.elements = Array.isArray(elements) ? elements : [];
  }

  push(value) {
    this.elements.push(value);
  }

  peek() {
    return this.elements.indexOf(this.elements.length - 1);
  }

  pop() {
    this.elements.pop();
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

  printStack() {
    if(this.elements.length > 0) {
      const stackStr = this.elements.join(", ");
      console.log(stackStr);
    } else {
      console.log("Empty Stack")
    }
  }
}

// Note in this stack, the first element is the last element of the array.
const testExample = new SimpleStack();
const testFullStack = new SimpleStack([1,2,3,4]);
testExample.printStack();
testFullStack.printStack();
console.log("\n");
// TestExample should print: Empty Stack
// TestFullStack should print: 1, 2, 3, 4

testExample.push(4);
testExample.push(3);
testExample.push(2);
testExample.push(1);
testExample.printStack();
console.log("If we peek, we should get (1): ", testExample.peek());
// TestExample should print: 4, 3, 2, 1

testFullStack.pop();
testFullStack.pop();
testFullStack.pop();
testFullStack.pop();
testFullStack.printStack();
// TestFullStack should print: Empty Stack
console.log("Is this stack empty?", testFullStack.isEmpty());
console.log("\n");

console.log("What is the size of the stack? ", testExample.size());
testExample.clear();
console.log("Is it empty after I clear it? ", testExample.isEmpty());








