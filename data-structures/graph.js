class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(name) {
        if (!this.adjancencyList[name]) {
            this.adjancencyList[name] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]) {
            return false;
        }
        this.adjancencyList[vertex1].push(vertex2);
        this.adjancencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]) {
            return false;
        }
        // vertex 1
        const vertex1Arr = this.adjancencyList[vertex1];
        const vertex1NewArr = [];
        for (let i = 0 ; i < vertex1Arr.length ; i++) {
            if (vertex1Arr[i] !== vertex2) {
                vertex1NewArr.push(vertex1Arr[i]);
            }
        }
        this.adjancencyList[vertex1] = vertex1NewArr;
        // vertex 2
        const vertex2Arr = this.adjancencyList[vertex2];
        const vertex2NewArr = [];

        for (let i = 0 ; i < vertex2Arr.length ; i++) {
            if (vertex2Arr[i] !== vertex1) {
                vertex2NewArr.push(vertex2Arr[i]);
            }
        }
        this.adjancencyList[vertex2] = vertex2NewArr
    }

    removeVertex(vertex) {
        if(!this.adjancencyList[vertex]) {
            return false;
        }
        const targetVertex = this.adjancencyList[vertex];

        for (let i = 0 ; i < targetVertex.length ; i++) {
            this.removeEdge(vertex, targetVertex[i]);
        }

        delete this.adjancencyList[vertex];
    }
}

