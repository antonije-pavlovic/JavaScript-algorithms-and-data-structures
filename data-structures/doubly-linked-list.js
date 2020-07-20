class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     *  Adding element on the end of list
     */
    push(value) {
        const newNode = new Node(value);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return true;
    }

    /**
     *  Remove last element in the list
     */
    pop() {
        if (!this.length) {
            return false;
        }

        const previous = this.tail.previous;
        if (previous) {
            previous.next = null;
            this.tail.previous = null;
            this.tail = previous;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length--;
        return true;
    }

    /**
     * Removing a node from the beginning of the list
     */
    shift() {
        if (!this.length) {
            return false;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const oldHead = this.head;
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }

        this.length--;
        return true;
    }

    /**
     * Add node to the beginning of the list
     */
    unshift(value) {
        const newNode = new Node(value);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }

        this.length++;
        return true;
    }

    /**
     *  Accessing a node in list by its position
     */
    get(position) {
        if (!this.length) {
            return false;
        }
        if (position < 0 || position >= this.length) {
            return false;
        }
        if (position === 0) {
            return this.head
        }
        if (position === this.length - 1) {
            return this.tail;
        }

        const middle = Math.floor(this.length / 2);
        let current;
        let counter;

        if (position <= middle) {
            current = this.head;
            counter = 0;
            while (position !== counter) {
                current = current.next;
                counter++;
            }
        } else {
            current = this.tail;
            counter = this.length - 1;
            while (position !== counter) {
                current = current.previous;
                counter--;
            }
        }

        return current;
    }

    /**
     *  Replacing the value of a node in the list
     */
    set(value, position) {
        const targetNode = this.get(position);
        if (targetNode) {
            targetNode.value = value;
            return true;
        }
        return false;
    }

    /**
     *  Adding a node in list by a certain position
     */
    insert(value, position) {
        if (!this.length) {
            return false;
        }

        if (position < 0 || position > this.length) {
            return false;
        }

        if (position === 0) {
            return this.unshift(value);
        } else if (position === this.length) {
            return this.push(value);
        } else {
            const newNode = new Node(value);
            const targetNode = this.get(position - 1);

            const previous = targetNode.previous;
            const following = targetNode.next;

            previous.next = newNode;
            newNode.previous = previous;

            following.previous = newNode;
            newNode.next = following;

            this.length++;
        }

        return true;
    }

    /**
     * Removing node in the list by a certain position
     */
    remove(position) {
        if(!this.length) {
            return false;
        }

        if(position < 0 || position >= this.length) {
            return false
        }
        if(position === 0) {
            return this.shift()
        }

        if(position === this.length - 1) {
            return this.pop();
        }

        const targetNode = this.get(position);
        const previous = targetNode.previous;
        const following = targetNode.next;

        previous.next = following;
        following.previous = previous;

        targetNode.next = null;
        targetNode.previous = null;
        this.length--;

        return true;
    }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.remove(1);
console.log(list);
