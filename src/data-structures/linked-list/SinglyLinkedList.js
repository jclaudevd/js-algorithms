class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(value, index) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    const previousNode = this.traverseToIndex(index - 1);
    const afterNode = previousNode.next;
    const newNode = new Node(value);
    newNode.next = afterNode;
    previousNode.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index >= this.length) return this;
    this.length--;
    if (index === 0) {
      this.head = this.head.next;
      return this;
    }
    const previousNode = this.traverseToIndex(index - 1);
    const nodeForRemoval = previousNode.next;
    previousNode.next = nodeForRemoval.next;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(4);
list.append(5);
list.prepend(0);
list.insert(3, 3);
list.insert("ODD", 5);
console.log("BEFORE", list.printList());
list.remove(5);
console.log("AFTER", list.printList());
