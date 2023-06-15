function isBalanced(root) {
  // Helper function to calculate the height of a node
  function getHeight(node) {
    if (node === null) {
      // BASE CASE
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }

  // Helper function to check if the tree is balanced
  function checkBalanced(node) {
    if (node === null) {
      // BASE CASE
      return true;
    }

    // Calculate the height of the left and right subtrees
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    // Check if the difference in heights is more than 1
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    // Recursively check if the left and right subtrees are balanced
    return checkBalanced(node.left) && checkBalanced(node.right);
  }

  // Start the traversal from the root node
  return checkBalanced(root);
}

const node1 = { left: null, right: null, value: 1 };
const node2 = { left: null, right: null, value: 2 };
const node3 = { left: null, right: null, value: 3 };
const node4 = { left: null, right: null, value: 4 };
const node5 = { left: null, right: null, value: 5 };
const node6 = { left: null, right: null, value: 6 };
const node7 = { left: null, right: null, value: 7 };
node1.right = node2;
node1.left = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

const root = node1;


// Call the function to check if the tree is balanced
const isTreeBalanced = isBalanced(root);
console.log(isTreeBalanced); // Output: true for balanced or false if not balanced
