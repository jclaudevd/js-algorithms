class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.top) {
      this.top = this.bottom = newNode;
      return this;
    }
    const previousTop = this.top;
    this.top = newNode;
    this.top.next = previousTop;
    return this;
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) this.bottom = null;
    const previousTop = this.top;
    this.top = this.top.next;
    this.length--;
    return previousTop;
  }
  peek() {
    return this.top;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
console.log(stack);
console.log(stack.pop());
console.log(stack);
