class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let temp = this.tail;
    temp.next = newNode;
    newNode.prev = temp;
    this.tail = newNode;

    this.length++;
    return this;
  }
  pop() {
    let removeNode = this.tail;

    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removeNode.prev;
      this.tail.next = null;
      removeNode.prev = null;
    }
    this.length--;
    return removeNode;
  }
  shift() {
    let oldHead = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  unShift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      oldHead.prev = newNode;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index > this.length / 2) {
      let current = this.head;
      let count = 0;

      while (index !== count) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let current = this.tail;
      let count = this.length - 1;

      while (index !== count) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insert(value, index) {
    let newNode = new Node(value);
    if (index === 0) this.unShift(value);
    if (index === this.length) this.push(value);

    let oldNode = this.get(index - 1);
    let temp = oldNode.next;
    oldNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    // let removedNode = prevNode.next;
    removedNode.prev.next = removedNode.next;
    removedNode.next.next = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(15);
list.push(25);
list.push(42);
list.push(35);
