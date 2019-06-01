class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    let index = this.values.length - 1;
    let newItem = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (newItem.priority > parent.priority) break;
      this.values[parentIndex] = this.values[index];
      this.values[index] = parent;
      index = parentIndex;
    }
    return this;
  }
  dequeue() {
    let min = this.values[0];
    if (this.values.length === 1) return this.values.pop();
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return min;
  }
  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    const length = this.values.length - 1;

    if (left <= length && this.values[left].priority < this.values[largest].priority) {
      largest = left;
    }

    if (right <= length && this.values[right].priority < this.values[largest].priority) {
      largest = right;
    }

    if (largest !== index) {
      let temp = this.values[index];
      this.values[index] = this.values[largest];
      this.values[largest] = temp;
      this.sinkDown(largest);
    }
  }
}

let pq = new PriorityQueue;
pq.enqueue("fever", 13);
pq.enqueue("concussion", 5);
pq.enqueue("broken bone", 3);
pq.enqueue("gunshot wound", 1);
pq.enqueue("minor laceration", 8);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
