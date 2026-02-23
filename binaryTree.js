class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        const node = new Node(val)
        if (this.root === null) {
            this.root = node
            return
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        const queue = [root]
        while (queue.length) {
            const currentNode = queue.shift()
            if (currentNode.left === null) {
                return currentNode.left = node
            } else {
                queue.push(currentNode.left)
            }
            if (currentNode.right === null) {
                return currentNode.right = node
            } else {
                queue.push(currentNode.right)
            }
        }
    }
    levelOrder(root) {
        if (!root) return null
        const queue = [root]
        while (queue.length) {
            const currentNode = queue.shift()
            if (currentNode) {
                console.log(currentNode.val);
                queue.push(currentNode.left)
                queue.push(currentNode.right)
            }
        }
    }
}

const bt = new BinaryTree()
bt.insert(10)
bt.insert(20)
bt.insert(30)
bt.insert(40)
bt.insert(50)
bt.levelOrder(bt.root)

