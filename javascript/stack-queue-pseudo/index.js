class Queue {
  const () {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue = new Queue();

queue.enqueue('playstation1');
queue.enqueue('playstation2');
queue.enqueue('playstation3');
queue.enqueue('playstation4');

queue.dequeue; //will remove first node/element
queue(); //will return removed node/element
