class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    this.length++;
    return this.length;
  }
  pop() {
    if (!this.first) return null;
    let removedNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = removedNode.next;
    this.length--;
    return removedNode.value;
  }
}

let stack = new Stack();
