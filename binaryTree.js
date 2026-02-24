class Node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

class BianryTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        const node = new Node(val)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        let queue = [root]
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
    
    levelorder(root){
        let queue = [root]
        while(queue.length){
            const currentHead = queue.shift()
            if(currentHead){
            console.log(currentHead.val)
            queue.push(currentHead.left)
            queue.push(currentHead.right)
            }
        }
    }

    search(root, val){
        const queue = [root]
        while(queue.length){
            const currentHead = queue.shift()
            if(currentHead){
                if(currentHead.val===val){
                    return val
                }
                queue.push(currentHead.left)
                queue.push(currentHead.right)
            }
        }
        return 'Oops!! value not found.'
    }

    // root, left, right [10, 20, 40, 50, 30]
    preorder(root){
        if(root){
            console.log(root.val);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    // left, root, right [40, 20, 50, 10, 30]
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.val);
            this.inorder(root.right)
        }
    }

    // left, right, root [40, 50, 20, 30, 10]
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.val);
        }
    }
}

const bt = new BianryTree()
bt.insert(10)
bt.insert(20)
bt.insert(30)
bt.insert(40)
bt.insert(50)
// bt.levelorder(bt.root)
// bt.preorder(bt.root)
// bt.inorder(bt.root)
bt.postorder(bt.root)
// console.log(bt.search(bt.root, 500))