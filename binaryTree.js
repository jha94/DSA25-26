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

    levelorder(root) {
        let queue = [root]
        while (queue.length) {
            const currentHead = queue.shift()
            if (currentHead) {
                console.log(currentHead.val)
                queue.push(currentHead.left)
                queue.push(currentHead.right)
            }
        }
    }

    search(root, val) {
        const queue = [root]
        while (queue.length) {
            const currentHead = queue.shift()
            if (currentHead) {
                if (currentHead.val === val) {
                    return val
                }
                queue.push(currentHead.left)
                queue.push(currentHead.right)
            }
        }
        return 'Oops!! value not found.'
    }

    // root, left, right [10, 20, 40, 50, 30]
    preorder(root) {
        if (root) {
            console.log(root.val);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    // left, root, right [40, 20, 50, 10, 30]
    inorder(root) {
        const res = []
        const traverse = (root) => {
            if (root) {
                traverse(root.left)
                res.push(root.val)
                traverse(root.right)
            }
        }
        traverse(root)
        return res
    }

    // left, right, root [40, 50, 20, 30, 10]
    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.val);
        }
    }

    isBalanced(root) {
        const heightDiff = (root) => {
            if (!root) return 0
            const left = heightDiff(root.left)
            if (left === -1) return -1
            const right = heightDiff(root.right)
            if (right === -1) return -1
            if (Math.abs(left - right) > 1) return -1
            return 1 + Math.max(left, right)
        }
        return heightDiff(root) !== -1
    }

    countNodes(root) {
        let res = 0;
        const count = (root) => {
            if (root) {
                if (root.val) {
                    res++
                }
                count(root.left)
                count(root.right)
            }
        }
        count(root)
        return res
    }

    nodeSum(root) {
        let sum = 0;
        const getSum = (root) => {
            if (root) {
                sum += root.val;
                getSum(root.left)
                getSum(root.right)
            }
        }
        getSum(root)
        return sum
    }

    searchNode(root, target) {
        let isFound = false
        const find = (root, target) => {
            if (root) {
                if (root.val === target) {
                    isFound = true
                }
                find(root.left, target)
                find(root.right, target)
            }
        }
        find(root, target)
        return isFound
    }

    findMin(root){
        let min = Infinity
        const getMin = (root) => {
            if(root){
            if(root.val<min){
                min = root.val
            }
            getMin(root.left)
            getMin(root.right)
        }
        }
        getMin(root)
        return min
    }
}

const bt = new BianryTree()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
// console.log(bt.isBalanced(bt.root))
console.log(bt.countNodes(bt.root));
console.log(bt.nodeSum(bt.root));
console.log(bt.searchNode(bt.root, 10));
console.log(bt.findMin(bt.root));
