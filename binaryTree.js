
// insert, preorder, inorder, postorder, levelOrder, search, countNodes, nodeSum, findMin
// invert, maxDepth, isSameTree, isbalanced (height diff must be 1 bet left n right tree)
// isSubtree, rightSideView, kthSmallestElement, diameter(logic not clear)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
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
        } else {
            return this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        const queue = [root]
        while (queue.length) {
            const current = queue.shift()
            if (current.left === null) {
                return current.left = node
            } else {
                queue.push(current.left)
            }
            if (current.right === null) {
                return current.right = node
            } else {
                queue.push(current.right)
            }
        }
    }
    preorder(root) {
        if (root) {
            console.log(root.val);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.val);
            this.inorder(root.right)
        }
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.val);
        }
    }

    levelOrder(root) {
        const queue = [root]
        while (queue.length) {
            let current = queue.shift()
            if (current) {
                console.log(current.val);
                queue.push(current.left)
                queue.push(current.right)
            }
        }
    }

    search(root, val) {
        // if (root) {
        //     if (root.val === val) {
        //         return true
        //     }
        //     return this.search(root.left, val) || this.search(root.right, val)
        // }
        // return false
        const queue = [root]
        while (queue.length) {
            const current = queue.shift()
            if (current) {
                if (current.val === val) {
                    return true
                }
                queue.push(current.left)
                queue.push(current.right)
            }
        }
        return false
    }

    countNodes(root) {
        let count = 0
        // const traverse = (root) => {
        //     if(root){
        //         if(root.val){
        //             count++
        //         }
        //         traverse(root.left)
        //         traverse(root.right)
        //     }
        // }
        // traverse(root)

        const queue = [root]
        while (queue.length) {
            const current = queue.shift()
            if (current) {
                if (current.val) {
                    count++
                }
                queue.push(current.left)
                queue.push(current.right)
            }
        }
        return count
    }

    nodeSum(root) {
        let sum = 0;
        // const traverse = (root) => {
        //     if(root){
        //         sum+=root.val
        //         traverse(root.left)
        //         traverse(root.right)
        //     }
        // }
        // traverse(root)

        const queue = [root]
        while (queue.length) {
            const current = queue.shift()
            if (current) {
                sum += current.val
                queue.push(current.left)
                queue.push(current.right)
            }
        }
        return sum
    }

    findMin(root) {
        let min = Infinity
        // const traverse = (root) => {
        //     if(root){
        //         if(root.val<min){
        //             min = root.val
        //         }
        //         traverse(root.left)
        //         traverse(root.right)
        //     }
        // }
        // traverse(root)

        const queue = [root]
        while (queue.length) {
            const current = queue.shift()
            if (current) {
                if (current.val < min) {
                    min = current.val
                }
                queue.push(current.left)
                queue.push(current.right)
            }
        }
        return min
    }

    invert(root) {
        if (root) {
            [root.left, root.right] = [root.right, root.left]
            this.invert(root.left)
            this.invert(root.right)
        }
        // const queue = [root]
        // while(queue.length){
        //     const current = queue.shift()
        //     if(current){
        //         [current.left, current.right] = [current.right, current.left]
        //         queue.push(current.left)
        //         queue.push(current.right)
        //     }
        // }
        return root
    }

    maxDepth(root) {
        if (!root) return 0
        let left = this.maxDepth(root.left)
        let right = this.maxDepth(root.right)
        return 1 + Math.max(left, right)
    }

    diameter(root) {
        let res = 0
        const calculate = (root, res) => {
            if (!root) return 0
            let left = calculate(root.left, res)
            let right = calculate(root.right, res)
            res = Math.max(res, left + right)
            return 1 + Math.max(left, right)
        }
        calculate(root, res)
        return res
    }

    isSameTree(p, q) {
        if (!p && !q) return true
        if (!p || !q) return false
        if (p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
        }
        return false
    }

    isBalanced(root) {
        const heightDiff = (root) => {
            if (root) {
                const left = heightDiff(root.left)
                if (left === -1) return -1
                const right = heightDiff(root.right)
                if (right === -1) return -1
                if (Math.abs(left - right) > -1) return -1
                return 1 + Math.max(left, right)
            }
        }
        return heightDiff(root) !== -1
    }

    isSubtree(p, q) {
        if (!q) return true
        if (!p) return false
        if (p.val !== q.val) {
            return this.isSubtree(p.left, q) || this.isSubtree(p.right, q)
        }
        return this.isSameTree(p, q)
    }

    rightSideView(root) {
        const res = []
        const traverseByLevel = (root, level) => {
            if (!root) return []
            if (level === res.length) {
                res.push([])
            }
            if (root.val) {
                res[level].push(root.val)
            }
            traverseByLevel(root.left, level + 1)
            traverseByLevel(root.right, level + 1)
        }
        traverseByLevel(root, 0)
        return res.map((val) => val[val.length - 1])
    }

    kthSmallest(root, k) {
        const res = []
        const traverse = (root) => {
            if (!root) return null
            traverse(root.left)
            res.push(root.val)
            traverse(root.right)
        }
        traverse(root)
        return res[k - 1]
    }

    goodNodes(root) {
        let count = 0;
        const traverse = (root, max) => {
            if (!root) return 0
            if (root.val >= max) {
                count++
            }
            traverse(root.left, Math.max(max, root.val))
            traverse(root.right, Math.max(max, root.val))
        }
        traverse(root, root.val)
        return count
    }

    isValidBST(root) {
        const values = []
        const traverse = (root) => {
            if (!root) return []
            traverse(root.left)
            values.push(root.val)
            traverse(root.right)
        }
        traverse(root)
        let res = true
        for (let index = 0; index < values.length; index++) {
            if (values[index] >= values[index + 1]) {
                res = false
            }
        }
        return res
    }
}

const bt = new BinaryTree();
bt.insert(1)
bt.insert(2)

bt.insert(3)
console.log(bt.isValidBST(bt.root));


// console.log(bt.isSubtree(bt.root, bt2.root));
// console.log(bt.isSameTree(bt.root, bt2.root))
// bt.preorder(bt.root)
// bt.inorder(bt.root)
// bt.postorder(bt.root)
// bt.levelOrder(bt.root)
// console.log(bt.search(bt.root, 12))
// console.log(bt.countNodes(bt.root));
// console.log(bt.nodeSum(bt.root));
// console.log(bt.findMin(bt.root));
// const invertedRoot = bt.invert(bt.root)
// bt.inorder(invertedRoot)
// console.log(bt.maxDepth(bt.root));
// console.log(bt.diameter(bt.root));
// console.log(bt.rightSideView(bt.root));
// console.log(bt.kthSmallest(bt.root, 2));
// console.log(bt.goodNodes(bt.root));





