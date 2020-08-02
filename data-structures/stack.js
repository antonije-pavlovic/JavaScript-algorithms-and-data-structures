class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * NOTE: This in in case when implementation of stack is using singly linked list
 * (in doubly linked list we have previous pointer so we can easily access to before last node)
 *
 *  Add and remove on beginning of the list we are getting constant time, other way we need to iterate throw whole list to get to end
 */
class Stack {
    constructor(maxSize) {
        this.first = null;
        this.last = null;
        this.maxSize = maxSize;
        this.size = 0;
    }

    /**
     * Adding new node
     */
    push(value) {
        if(this.size >= this.maxSize) {
            return 'Stack is full';
        }

        const newNode = new Node(value);

        if(!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode
        }

        return ++this.size;
    }

    /**
     * Remove last added node
     */
    pop(){
        if(!this.size) {
            return false;
        }

        const removed = this.first;
        if(this.size === 1) {
            this.last = null;
            this.first = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;

        return removed;
    }

    /**
     * Checks if the stack is full.
     */
    isFull() {
        return this.size >= this.maxSize;
    }

    /**
     * Checks if the stack is empty.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Gets the element at the top of the stack without removing it.
     */
    peek() {
        if (!this.size) {
            return false;
        } else {
            return this.last.value;
        }
    }
}


