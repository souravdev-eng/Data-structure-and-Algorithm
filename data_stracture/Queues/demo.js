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
  enQueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }
  deQueue() {
    if (!this.first) return undefined;

    if (this.first === this.last) {
      this.last = null;
    }

    let removedNode = this.first;
    this.first = removedNode.next;
    this.length--;
    return removedNode.value;
  }
}

let q = new Queue();
