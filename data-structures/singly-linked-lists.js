class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     *
     * Push the new node on the end of list
     */
    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return true;
    }

    /**
     *
     * Remove node from end of list
     */
    pop() {
        let current = this.head;
        let previous = this.head;

        if (!this.length) {
            return false;
        }

        while (current.next) {
            previous = current;
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length--;
        current = null;

        if (!this.length) {
            this.tail = null;
            this.head = null;
        }

        return true;
    }

    /**
     * Remove node from beginning of the list
     */
    shift() {
        if (!this.length) {
            return false;
        }

        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return true;
    }

    /**
     * Add new node to the beginning of the list
     */
    unshift(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return true;
    }

    /**
     *  Retrieve a node by its position in the list
     */

    get(position) {
        if (position < 0 || position > this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;

        while (position !== counter) {
            current = current.next;
            counter++;
        }

        return current;
    }

    /**
     *  Change value of node based on its position in the list
     */
    set(value, position) {
        if (position < 0 || position > this.length) {
            return false;
        }
        const targetNode = this.get(position);
        if (targetNode) {
            targetNode.value = value;
            return true;
        }
        return false;
    }

    /**
     *  Adding a node to the list at specific position
     */
    insert(value, position) {
        if (position < 0 || position > this.length) {
            return false;
        }
        if (position === this.length) {
            return this.push(value);
        }
        if (position === 0) {
            return this.unshift(value);
        }

        const newNode = new Node(value);
        const previous = this.get(position - 1);

        newNode.next = previous.next;
        previous.next = newNode;
        this.length++;

        return true;
    }

    /**
     *  Remove node from list at the specific position
     */
    remove(position) {
        if (position < 0 || position > this.length) {
            return false;
        }
        if (position === 0) {
            return this.shift()
        }
        if (position === this.length - 1) {
            return this.pop();
        }

        const previous = this.get(position - 1);
        previous.next = previous.next.next;
        this.length--;

        return true;
    }

    /**
     * Reversing the list in place
     */
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = this.head;

        let next;
        let previous = null;
        for (let i = 0 ; i < this.length ; i++) {
            next = node.next;
            node.next = previous;

            previous = node;
            node = next;
        }

        return true;
    }

    /**
     *  Print all nodes in the list
     */
    print() {
        const arr = [];
        let node = this.head;
        for(let i = 0; i < this.length; i++) {
            arr.push(node);
            node = node.next;
        }
        console.log(arr);
    }
}
