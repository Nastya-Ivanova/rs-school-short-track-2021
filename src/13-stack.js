/*
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.top = 0;
    this.data = [];
  }

  push(element) {
    this.data[this.top] = element;
    this.top += 1;
  }

  pop() {
    const deleteElem = this.data[this.top - 1];
    this.top -= 1;
    return deleteElem;
  }

  peek() {
    return this.data[this.top - 1];
  }
}

module.exports = Stack;
