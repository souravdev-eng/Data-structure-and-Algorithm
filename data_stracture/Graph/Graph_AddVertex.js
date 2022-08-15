class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    //  1. Loop the adjacency list for the vertex
    while (this.adjacencyList[vertex].length) {
      // 2. Remove the vertex from the adjacency list of the adjacent vertex
      const adjacentVertex = this.adjacencyList[vertex].pop();
      // 3. Remove the adjacent vertex from the adjacency list of the vertex
      this.removeEdge(vertex, adjacentVertex);
    }
    // 4. Delete the vertex
    delete this.adjacencyList[vertex];
  }
}

const myGraph = new Graph();

myGraph.addVertex('India');
myGraph.addVertex('Japan');
myGraph.addVertex('Russia');
myGraph.addEdge('Japan', 'India');
myGraph.addEdge('Russia', 'India');
myGraph.addEdge('Russia', 'Japan');
// myGraph.removeEdge('Japan', 'India');
myGraph.removeVertex('Japan');

console.log(myGraph.adjacencyList);
