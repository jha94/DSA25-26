// add, traverse, prepend, deleteByValue, reverse

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(value, prepend) {
        const node = new Node(value)
        if (this.head === null) {
            return this.head = node
        }
        if (prepend) {
            node.next = this.head
            return this.head = node
        }
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        return current.next = node
    }
    traverse() {
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }
    deleteByValue(value) {
        if (this.head === null) {
            return 'Linked list is empty'
        }
        if (this.head.value === value) {
            return this.head = this.head.next
        }
        let current = this.head
        while (current.next !== null) {
            if (current.next.value === value) {
                return current.next = current.next.next
            }
            current = current.next
        }
    }

    reverse(){
        let head = this.head
        let [prev, current, next] = [null, head, null]
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }
}

const ll1 = new LinkedList()
ll1.add(1)
ll1.add(2)
ll1.add(3)
// ll1.add(2, true)
// ll1.traverse()
// ll1.deleteByValue(3)
ll1.traverse()
ll1.reverse()
ll1.traverse()

