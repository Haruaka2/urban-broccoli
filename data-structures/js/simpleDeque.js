class SimpleDeque {
  constructor(elements) {
    this.elements = Array.isArray(elements) ? elements : [];
  }

  pushFront(value) {
    this.elements = [value, ...this.elements];
  }

  pushBack(value) {
    this.elements.push(value);
  }
  
  front() {
    return this.elements.length > 0 ? this.elements.at(0) : null;
  }

  back(){
    const len = this.elements.length;
    return len > 0 ? this.elements.at(len - 1) : null;
  }
  
  popFront() {
    this.elements.splice(0, 1);
  }

  popBack() {
    this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  clear() {
    this.elements = []
  }

  printDeque() {
    if(this.elements.length > 0) {
      const dequStr = this.elements.join(", ");
      console.log(dequStr);
    } else {
      console.log("Emtpy Dequeue")
    }
  }
}

const testExample = new SimpleDequeue();
const testPresetDeque = new SimpleDequeue([1, 2, 3, 4, 5]);
testExample.printDeque();
testPresetDeque.printDeque();
console.log("\n");
