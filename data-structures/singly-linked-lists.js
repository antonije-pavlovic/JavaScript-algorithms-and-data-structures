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
}

const list = new SingleLinkedList();

list.push(1);

//console.log(list.pop());
list.push(2);
list.unshift(3);
//console.log(list);
console.log({ head: list.head });
console.log({ tail: list.tail });
