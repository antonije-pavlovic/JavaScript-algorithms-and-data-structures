class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return false;
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return false;
        }
        // vertex 1
        const vertex1Arr = this.adjacencyList[vertex1];
        const vertex1NewArr = [];
        for (let i = 0 ; i < vertex1Arr.length ; i++) {
            if (vertex1Arr[i] !== vertex2) {
                vertex1NewArr.push(vertex1Arr[i]);
            }
        }
        this.adjacencyList[vertex1] = vertex1NewArr;
        // vertex 2
        const vertex2Arr = this.adjacencyList[vertex2];
        const vertex2NewArr = [];

        for (let i = 0 ; i < vertex2Arr.length ; i++) {
            if (vertex2Arr[i] !== vertex1) {
                vertex2NewArr.push(vertex2Arr[i]);
            }
        }
        this.adjacencyList[vertex2] = vertex2NewArr
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return false;
        }
        const targetVertex = this.adjacencyList[vertex];

        for (let i = 0 ; i < targetVertex.length ; i++) {
            this.removeEdge(vertex, targetVertex[i]);
        }

        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const that = this;

        function traverse(vertex) {
            if (!vertex) {
                return false;
            }
            visited[vertex] = true;
            result.push(vertex);
            const targetVertex = that.adjacencyList[vertex];

            for (let i = 0 ; i < targetVertex.length ; i++) {
                if (!visited[targetVertex[i]]) {
                    traverse(targetVertex[i])
                }
            }
        }

        traverse(start);
        return result;
    }

    /**
     * good to use stack instead of array
     */
    depthFirstIterative(start) {
        const visited = {};
        const result = [];
        let currentVertex;

        const stack = [start];
        visited[start] = true;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            const neighbors = this.adjacencyList[currentVertex];
            for(let i = 0; i < neighbors.length; i++) {
                if(!visited[neighbors[i]]) {
                    visited[neighbors[i]] = true;
                    stack.push(neighbors[i]);
                }
            }
        }
        return result;
    }

    /**
     * good to use queue instead of array
     */
    breadthFirst(start) {
        const result =[];
        const visited = {};
        const queue = [];
        let currentVertex;

        queue.push(start);
        visited[start] = true;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            const neighbors = this.adjacencyList[currentVertex];
            for(let i = 0; i < neighbors.length; i++) {
                if(!visited[neighbors[i]]) {
                    visited[neighbors[i]] = true;
                    queue.push(neighbors[i]);
                }
            }
        }
        return result;
    }
}
