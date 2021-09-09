class Queue {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  enqueue(value) {
    this.data.push(value);
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.length) return undefined;
    this.length--;
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue, queue.peek());
