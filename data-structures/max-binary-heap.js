class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parentElement = this.values[parentIndex];

            if (element <= parentElement) {
               break;
            }

            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex
                }
            }

            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];

                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex
                }
            }

            if(swap === null) {
                break;
            }
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;

        }
    }
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(199);

const max = heap.extractMax();
console.log(max);
console.log(heap.values);
