class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
        this.diameterLength = 0;
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
    maxDepth(root){
        if(!root) return 0
        const stack = [[root,1]]
        let max = 0
        while(stack.length){
            const [node, depth] = stack.pop();
            max = Math.max(max, depth)
            if(node.left) stack.push([node.left, depth+1])
            if(node.right) stack.push([node.right, depth+1])
        }
        return max
        // return 1+Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.postorder(bst.root)
console.log(bst.maxDepth(bst.root));
