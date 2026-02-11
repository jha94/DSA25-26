// add, traverse, prepend, deleteByValue, reverse

class Node {
    constructor(value = 0) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(value, prepend=false) {
        const node = new Node(value);
        if(this.head===null){
           return this.head = node
        }
        if(prepend){
            node.next = this.head
            this.head = node
            return
        }
        let current = this.head
        while(current.next!==null){
            current = current.next
        }
        current.next = node
        this.size++
        return
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.value);
            current = current.next
        }
    }
    deleteByValue(value){
        let current = this.head
        if(current===null) return
        if(current.value===value){
            return this.head = current.next
        }
        while(current.next!==null){
            if(current.next.value===value){
               return current.next = current.next.next
            }
            current = current.next
        }
    }
    reverse(){
        let current = this.head
        let [prev, curr, next] = [null, current, null]
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
}

const ll1 = new LinkedList()
ll1.add(1)
ll1.add(2)
ll1.add(3, true)
ll1.traverse()
ll1.deleteByValue(1)
ll1.traverse()