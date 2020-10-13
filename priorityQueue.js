class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    let queueElement = new this.QueueElement(data, priority);

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

PriorityQueue.prototype.QueueElement = class {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
};
