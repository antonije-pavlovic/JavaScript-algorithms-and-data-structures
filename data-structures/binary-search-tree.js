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


    breadthFirstTraversal() {
        const data = [];
        let node = this.root;
        const queue = [];

        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    depthFirstTraversalPreOrder() {
        const data = [];
        function traverse(node) {
            data.push(node.value);
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }

    depthFirstTraversalPostOrder() {
        const data = [];
        function traverse(node) {
            if(node.left) {
                traverse(node.left)
            }
            if(node.right) {
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(this.root);
        return data;
    }

    depthFirstTraversalInOrder() {
        const data = [];
        function traversal(node) {
            if(node.left) {
                traversal(node.left)
            }
            data.push(node.value);
            if(node.right) {
                traversal(node.right)
            }
        }
        traversal(this.root);
        return data;
    }
}
