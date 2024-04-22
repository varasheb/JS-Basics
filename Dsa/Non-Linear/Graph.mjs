class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.vertices[v1] || !this.vertices[v2]) {
            throw new Error('Vertex not found in the graph');
        }

        this.vertices[v1].push(v2);
        this.vertices[v2].push(v1);
    }

    dfs(startVertex) {
        const visited = {};
        const stack = [startVertex];
        const result = [];

        while (stack.length > 0) {
            const currentVertex = stack.pop();

            if (!visited[currentVertex]) {
                result.push(currentVertex);
                visited[currentVertex] = true;

                this.vertices[currentVertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        stack.push(neighbor);
                    }
                });
            }
        }

        return result;
    }

    bfs(startVertex) {
        const visited = {};
        const queue = [startVertex];
        const result = [];

        while (queue.length > 0) {
            const currentVertex = queue.shift();

            if (!visited[currentVertex]) {
                result.push(currentVertex);
                visited[currentVertex] = true;

                this.vertices[currentVertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        queue.push(neighbor);
                    }
                });
            }
        }

        return result;
    }
}
/*
   A
  / \
 B   C
  \ /
   D
   |
   E
*/
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

console.log('DFS:', graph.dfs('A')); // Output: ['A', 'C', 'D', 'E', 'B']
console.log('BFS:', graph.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E']
