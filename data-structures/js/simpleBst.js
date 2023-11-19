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
    if(newNode.data >= node) {

    } else {
      // left
      if(node.left) {
        // recusrive call;
      } else {
        node.left = newNode;
      }
    }
  }
  
  insert(value) {
    const newNode = new BstNode(value, null, null);
    if(this.root) {
        
    } else {
      this.root = newNode;
    }
  }
  remove() {}
  find() {}
  min() {}
  max() {}
  root() {
    return this.root;
  }
  traverseInOrder () {}
  traversePreOrder () {}
  traversePostOrder () {}
  clear() {}

  recursivePrint(value, bstNode, isLeft) {
    if(bstNode != null) {
      console.log(value + (isLeft ? "|-- " : "\\-- ") + bstNode.data);
      print(value + (isLeft ? "|   " : "    "), bstNode.left, true);
      print(value + (isLeft ? "|   " : "    "), bstNode.right, false);
    }
  }
  printBst() {
    this.recursivePrint("", root, false);
  }
}

const exampleTest = new SimpleBst();

