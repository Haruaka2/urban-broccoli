class SimpleStack {
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : [];
  }

  push() {}

  peek() {}

  pop() {}

  isEmpty() {}

  size() {}

  clear() {}

  printStack() {
    const stackStr = elements.join(", ");
    console.log(stackStr);
  }
}

const testExample = SimpleStack() {}