const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.length = 0;
    this.next = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    node.value = element;

    if (this.first === null) {
      this.first = node;
    } else {
      let current = this.first;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  dequeue() {
    const deleteElem = this.first.value;
    this.first = this.first.next;
    this.length--;
    return deleteElem;
  }
}

module.exports = Queue;
