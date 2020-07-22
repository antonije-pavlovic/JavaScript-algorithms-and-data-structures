class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 0;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return true;
        }

        let current = this.root;
        while (true) {
            if (newNode.value === current.value) {
                current.frequency++;
                return true;
            }
            if (newNode.value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return true;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return true;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value > current.value) {
                current = current.right;
            } else if(value < current.value) {
                current = current.left;
            } else {
                found = true;
            }
        }

        if (found) {
            return current
        } else {
            return false;
        }
    }
}
