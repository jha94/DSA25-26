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
            this.head = node
            this.size++
            return
        }
        if (prepend) {
            node.next = this.head
            this.head = node
            this.size++
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
        this.size++
        return
    }

    traverse(head) {
        let current = head
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }

    deleteByValue(value) {
        if (this.head === null) {
            return 'Oops!! No Data'
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return
        }
        let current = this.head
        while (current.next) {
            if (current.next.value === value) {
                return current.next = current.next.next
            }
            current = current.next
            return
        }
    }

    reverse() {
        let [prev, current, next] = [null, this.head, null]
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }

    reverseSum(reversedHead){
        let current = reversedHead;
        let total = ''
        while(current){
            total+=current.value
            current = current.next
        }
        return Number(total)
    }
}

const ll1 = new LinkedList()
ll1.add(1)
ll1.add(2)
ll1.add(3)
const reversedLl1 = ll1.reverse()
console.log(ll1.reverseSum(reversedLl1))
const ll2 = new LinkedList()
ll2.add(4)
ll2.add(5)
ll2.add(6)
const reversedLl2 = ll2.reverse()
console.log(ll1.reverseSum(reversedLl2))
// ll1.traverse(ll1.head)
// ll1.deleteByValue(3)
// ll1.traverse()
// ll1.deleteByValue(2)
// ll1.traverse()
// ll1.deleteByValue(2)
// const reversed = ll1.reverse()
// ll1.traverse(reversed)
