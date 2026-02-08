class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size
    }
    add(value) {
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    traverse() {
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }
    prepend(value) {
        const node = new Node(value);
        node.next = this.head
        this.head = node
    }
    insertAtEnd(value) {
        const node = new Node(value)
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next = node
    }
    deleteByValue(value) {
        if (!this.head) {
            return null
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
    reverse(head) {
        let [prev, current, next] = [null, head, null]
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }

}

const ll = new LinkedList();
ll.add(1)
ll.add(2)
// ll.traverse()
ll.prepend(0)
// ll.traverse()
ll.add(3)
// ll.traverse()
ll.prepend(4)
// ll.traverse()
// ll.insertAtEnd(-2)
// ll.traverse()
// ll.deleteByValue(4)
ll.traverse()
ll.reverse(ll.head)
ll.traverse()

