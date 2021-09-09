class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(value) {
    this.data.push(value);
    this.length++;
    return this;
  }
  pop() {
    this.length--;
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
