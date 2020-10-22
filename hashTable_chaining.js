const LinkedList = require("./linkedList");

class HashTable {
  constructor() {
    this.table = [];
  }
  loseloseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
  put(key, value) {
    let position = this.loseloseHashCode(key);
    console.log("position is ", position);
    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append(new this.ValuePair(key, value));
  }
  get(key) {
    let position = this.loseloseHashCode(key);
    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead();
      while (current !== null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  remove(key) {
    let position = this.loseloseHashCode(key);
    if (this.table[position] !== undefined) {
      let current = table[position].getHead();
      while (current !== null) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}
HashTable.prototype.ValuePair = class {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return "[" + this.key + " - " + this.value + "]";
  }
};
