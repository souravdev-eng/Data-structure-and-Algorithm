console.clear();

/*
 ******* BIG O ********
insert --> O(1)
Remove --> O(1)
Searching --> O(N)
Access --> O(N)
Technically Searching is  --> O(N/2) but that's still O(N)

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let popedNode = this.tail;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return popedNode;
  }
  shift() {
    let shiftNode = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftNode.next;
      this.head.prev = null;
      shiftNode.next = null;
    }
    this.length--;
    return shiftNode;
  }
  unShift(val) {
    let current = this.head;
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = current;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      // console.log('WORKING START');
      let count = 0;
      let current = this.head;

      while (index != count) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      // console.log('WORKING END');
      let count = this.length - 1;
      let current = this.tail;

      while (index != count) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unShift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

const myDoublyLinkedList = new DoublyLinkedList();

myDoublyLinkedList.push(25);
myDoublyLinkedList.push(33);
myDoublyLinkedList.push(40);
myDoublyLinkedList.push(12);
myDoublyLinkedList.push(9);
myDoublyLinkedList.push(12);
// myDoublyLinkedList.unShift(20);
myDoublyLinkedList.set(2, 100);
// myDoublyLinkedList.pop();
// myDoublyLinkedList.pop();
// myDoublyLinkedList.shift();
// const res = myDoublyLinkedList.get(6);
// console.log(res);
console.log(myDoublyLinkedList);
