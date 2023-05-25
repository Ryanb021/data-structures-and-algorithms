class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjacencyList.get(node1).push(node2);
    this.adjacencyList.get(node2).push(node1);
  }

  depthFirst(startNode) {
    const visited = new Set();
    const traversalOrder = [];

    // Define a recursive helper function
    const traverse = (node) => {
      visited.add(node);
      traversalOrder.push(node);

      const neighbors = this.adjacencyList.get(node);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          traverse(neighbor);
        }
      }
    };

    traverse(startNode);

    return traversalOrder;
  }
}

// Create a graph and add nodes and edges
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");
graph.addNode("H");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "G");
graph.addEdge("E", "H");
graph.addEdge("C", "F");

// Perform depth-first traversal starting from "A"
const traversal = graph.depthFirst("A");

// Display the traversal order
console.log("Traversal Order:", traversal.join(", "));

Traversal Order: A, B, D, E, H, C, G, F
