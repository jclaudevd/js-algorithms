class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.first) {
      this.first = this.last = newNode;
      return this;
    }
    this.last.next = newNode;
    this.last = newNode;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    const returnable = this.first;
    this.first = this.first.next;
    this.length--;
    return returnable;
  }
  peek() {
    return this.first;
  }
  printQueue() {
    if (!this.length) return [];
    const array = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const queue = new Queue();
queue.peek();
queue.enqueue(100);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
console.log(queue.printQueue());
