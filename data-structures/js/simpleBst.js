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

  }
  remove(value) {
    if(this.root) {
      this.recursiveRemove(value, this.root);
    } else {
      return;
    }
  }
  
  // Note: In-Order for BSTs returns the tree in sorted order
  recursiveTraverseInOrder(node, arr) {
    if(node === null) return;
    this.recursiveTraverseInOrder(node.left, arr);
    arr.push(node.data);
    this.recursiveTraverseInOrder(node.right, arr);
  }
  traverseInOrder () {
    let tempArr = [];
    if(this.root) {
      this.recursiveTraverseInOrder(this.root, tempArr);
      console.log("IN-ORDER: ", tempArr.join(", "));
    } else return;
  }

  recursiveTraversePreOrder(node, arr) {
    if(node === null) return;
    arr.push(node.data);
    this.recursiveTraversePreOrder(node.left, arr);
    this.recursiveTraversePreOrder(node.right, arr);
  }
  traversePreOrder () {
    let tempArr = [];
    if(this.root) {
      this.recursiveTraversePreOrder(this.root, tempArr);
      console.log("PRE-ORDER: ", tempArr.join(", "));
    } else return;
  }

  recursiveTraversePostOrder(node, arr) {
    if(node === null) return;
    this.recursiveTraversePostOrder(node.left, arr);
    this.recursiveTraversePostOrder(node.right, arr);
    arr.push(node.data);
  }
  traversePostOrder () {
    let tempArr = [];
    if(this.root) {
      this.recursiveTraversePostOrder(this.root, tempArr);
      console.log("POST-ORDER: ", tempArr.join(", "));
    } else return;
  }

  recursiveBstFind(node, value, isFound) {
    if(isFound || node === null) return;
    else {
      if(node.data === value) isFound == true;

      if(isFound) return;
      else {
        this.recursiveBstFind(node.left, value, isFound);
        this.recursiveBstFind(node.right, value, isFound);
      }
    }
  }
  find(node, value) {
    if(this.root === null) return false;
    else {
      let isFound = false;
      this.recursiveBstFind(node, value, isFound);
      return isFound;
    }
  }

  min() {

  }
  max() {
    
  }

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

exampleTest.traverseInOrder();
exampleTest.traversePreOrder();
exampleTest.traversePostOrder();
