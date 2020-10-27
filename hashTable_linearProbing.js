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
    if (this.table[position] === undefined) {
      this.table[position] = new this.ValuePair(key, value);
    } else {
      let index = ++position;
      while (this.table[index] !== undefined) {
        index++;
      }
      this.table[index] = new this.ValuePair(key, value);
    }
  }
  get(key) {
    let position = this.loseloseHashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        let index = ++position;
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          return this.table[index].value;
        }
      }
    }
    return undefined;
  }
  remove(key) {
    let position = this.loseloseHashCode(key);

    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        this.table[index] = undefined;
      } else {
        let index = ++position;
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          this.table[index] = undefined;
        }
      }
    }
    return undefined;
  }
}

HashTable.prototype.ValuePair = class {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
};
let hash = new HashTable();
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Gandlaf", "gandalf@email.com");
console.log(hash);
