//Binary Search Tree to add nodes
class Node {
  constructor(val) {
    this.val = val,
    this.right = null,
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  create(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide('left');
      else addSide('right');
    }
  }
}

const tree = new BST();
tree.create(1);
tree.create(2);
tree.create(3);
tree.create(4);
tree.create(5);
tree.create(6);
tree.create(7);

//Breadth First Search to traverse all nodes and return all traversed nodes value
function breadthFirstSearch() {
  let visited = [],
    queue = [],
    current = this.root;

  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    visited.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  };

  return visited;
}

console.log(tree.breadthFirstSearch()); //[ 1, 2, 3, 4, 5, 6, 7 ]
