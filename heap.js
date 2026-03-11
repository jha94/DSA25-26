class MaxHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(childIndex, parentIndex) {
    [this.heap[childIndex], this.heap[parentIndex]] = [
      this.heap[parentIndex],
      this.heap[childIndex],
    ];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(index) {
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
  }
  bubbleDown(index) {
    let largest = index;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largest]
    ) {
      largest = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largest]
    ) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      this.swap(largest, index);
      this.bubbleDown(largest);
    }
  }
  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  print() {
    console.log(this.heap);
  }
}

const mh = new MaxHeap();
mh.insert(10);
mh.insert(15);
mh.insert(5);
mh.insert(7);
mh.insert(40);
mh.insert(50);
mh.insert(60);
mh.print();
