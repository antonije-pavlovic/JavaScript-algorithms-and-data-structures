class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(maxSize) {
        this.first = null;
        this.last = null;
        this.maxSize = maxSize;
        this.size = 0;
    }

    /**
     *  Add on the end of queue
     */
    enqueue(value) {
        if (this.size >= this.maxSize) {
            return 'Queue is full';
        }
        const newNode = new Node(value);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return newNode;
    }

    /**
     * Remove element from the beginning of the queue
     */
    dequeue() {
        if (!this.size) {
            return false;
        }

        const removed = this.first;
        if (this.size === 1) {
            this.last = null;
            this.first = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;
        return removed;
    }

    /**
     * Checks if the queue is full.
     */
    isFull() {
        return this.size >= this.maxSize;
    }

    /**
     * Checks if the queue is empty.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Gets the element at the front of the queue without removing it.
     */
    peek() {
        if (!this.size) {
            return false;
        } else {
            return this.first.value;
        }
    }
}
