function isBalanced(root) {
  // Helper function to calculate the height of a node
  function getHeight(node) {
    if (node === null) {
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }

  // Helper function to check if the tree is balanced
  function checkBalanced(node) {
    if (node === null) {
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
