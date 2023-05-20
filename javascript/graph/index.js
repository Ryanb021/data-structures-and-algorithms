class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, []);
    }
    return value;
  }

  addEdge(node1, node2, weight = 0) {
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      const edges1 = this.adjacencyList.get(node1);
      const edges2 = this.adjacencyList.get(node2);
      edges1.push({ node: node2, weight });
      edges2.push({ node: node1, weight });
    }
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(node) {
    if (this.adjacencyList.has(node)) {
      return this.adjacencyList.get(node);
    }
    return [];
  }

  size() {
    return this.adjacencyList.size;
  }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'D', 8);

console.log(graph.getNodes()); // Output: [ 'A', 'B', 'C', 'D' ]
console.log(graph.getNeighbors('A')); // Output: [ { node: 'B', weight: 10 }, { node: 'C', weight: 5 } ]
console.log(graph.size()); // Output: 4
