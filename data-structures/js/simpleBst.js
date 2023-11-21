class BstNode {
  constructor (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class SimpleBst {
  constructor() {
    this.root = null;
  }

  recursiveInsert(node, newNode) {
    //right
    if(newNode.data >= node.data) {
      if(node.right) {
        this.recursiveInsert(node.right, newNode);
      } else {
        node.right = newNode;
      }
    } else {
      if(node.left) {
        this.recursiveInsert(node.left, newNode);
      } else {
        node.left = newNode;
      }
    }
  }
  insert(value) {
    const newNode = new BstNode(value, null, null);
    if(this.root) {
        this.recursiveInsert(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  recursiveRemove(value, node) {
    if(this.root.data === value) {
      
    }

  }
  remove(value) {
    if(this.root) {
      this.recursiveRemove(value, this.root);
    } else {
      return;
    }
  }
  traverseInOrder () {}
  traversePreOrder () {}
  traversePostOrder () {}
  find() {}
  min() {}
  max() {}
  root() {
    return this.root;
  }

  clear() {}
  recursivePrint(value, bstNode, isLeft) {
    if(bstNode != null) {
      console.log(value + (isLeft ? "|-- " : "\\-- ") + bstNode.data);
      this.recursivePrint(value + (isLeft ? "|   " : "    "), bstNode.left, true);
      this.recursivePrint(value + (isLeft ? "|   " : "    "), bstNode.right, false);
    }
  }
  printBst() {
    if(this.root) {
      this.recursivePrint("", this.root, false);
    } else {
      console.log("Empty Binary Search Tree");
    }
  }
}

const exampleTest = new SimpleBst();
exampleTest.printBst();

exampleTest.insert(10);
exampleTest.insert(5);
exampleTest.insert(15);
exampleTest.insert(3);
exampleTest.insert(8);
exampleTest.insert(12);
exampleTest.insert(25);
exampleTest.insert(1);
exampleTest.insert(4);
exampleTest.printBst();
