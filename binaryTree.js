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
    insert(value) {
            const node = new Node(value)
            if (this.root === null) {
              return  this.root = node
            } 
           return this.insertNode(this.root, node)
    }
    insertNode(root, node) {
        if (root.left === null) {
           return root.left = node
        } else if (root.right === null) {
           return root.right = node
        } else{
            let left = root.left

        }
    }
    inorder(head) {
        if (head) {
            console.log(head.val);
            this.inorder(head.left)
            this.inorder(head.right)
        }
    }
}

const bt = new BinaryTree()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(null)
bt.insert(5)
bt.insert(null)
bt.insert(4)
bt.inorder(bt.root)