class SimpleBst {
  // https://github.com/orgs/datastructures-js/repositories?type=all
  constructor() {
    // Use Node with Left and Right
  }
  printBst() {
  }

  // insert
  // has
  // hasKey
  // find
  // findKey
  // min
  // max
/*
lowerBound (floor)
lowerBoundKey (floorKey)
upperBound (ceil)
upperBoundKey (ceilKey)
root
count
traverseInOrder
traversePreOrder
traversePostOrder
remove
removeNode
clear
*/
  /*
      constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : [];
    this._offset = 0;
  }
  */
  // pushFront
  // pushBack
  // front
  // back
  // popFront
  // popBack
  // isEmpty
  // size
}

/*
public StringBuilder toString(StringBuilder prefix, boolean isTail, StringBuilder sb) {
    if(right!=null) {
        right.toString(new StringBuilder().append(prefix).append(isTail ? "│   " : "    "), false, sb);
    }
    sb.append(prefix).append(isTail ? "└── " : "┌── ").append(value.toString()).append("\n");
    if(left!=null) {
        left.toString(new StringBuilder().append(prefix).append(isTail ? "    " : "│   "), true, sb);
    }
    return sb;
}

@Override
public String toString() {
    return this.toString(new StringBuilder(), true, new StringBuilder()).toString();
}

https://stackoverflow.com/questions/4965335/how-to-print-binary-tree-diagram-in-java
*/