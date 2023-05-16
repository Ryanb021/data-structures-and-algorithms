class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  containsKey(key) {
    return key in this.map;
  }

  get(key) {
    return this.map[key];
  }
}

function tree_intersection(tree1, tree2) {
  const tree1Values = getTreeValues(tree1);
  const intersectionSet = new Set();

  traverseTree(tree2, node => {
    if (tree1Values.has(node.value)) {
      intersectionSet.add(node.value);
    }
  });

  return intersectionSet;
}

function getTreeValues(root) {
  const values = new Set();
  traverseTree(root, node => {
    values.add(node.value);
  });
  return values;
}

function traverseTree(root, callback) {
  if (root === null) {
    return;
  }

  callback(root);

  traverseTree(root.left, callback);
  traverseTree(root.right, callback);
}
