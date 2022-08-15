class GraphDFSRecursive {
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
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

const myGraph = new GraphDFSRecursive();

myGraph.addVertex('India');
myGraph.addVertex('Japan');
myGraph.addVertex('Russia');
myGraph.addVertex('Tiban');
myGraph.addVertex('korea');
myGraph.addVertex('Australia');
myGraph.addEdge('Japan', 'India');
myGraph.addEdge('Russia', 'India');
myGraph.addEdge('Russia', 'korea');
myGraph.addEdge('Tiban', 'Japan');
myGraph.addEdge('Australia', 'India');
// myGraph.removeEdge('Japan', 'India');
// myGraph.removeVertex('Japan');
console.log(myGraph.depthFirstRecursive('India'));
// console.log(myGraph.adjacencyList);
