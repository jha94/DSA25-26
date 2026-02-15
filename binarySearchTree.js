class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.postorder(bst.root)