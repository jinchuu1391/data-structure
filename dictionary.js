class Dictionary {
  constructor() {
    this.items = {};
  }

  has(key) {
    return key in this.items;
  }
  set(key, value) {
    this.items[key] = value;
  }
  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }
  values() {
    let values = [];
    for (let key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key]);
      }
    }
    return values; // return Object.values(this.items)도 가능(ES8)
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  keys() {
    let values = [];
    for (let key in this.items) {
      values.push(key);
    }
    return values; // return Object.keys(this.items)도 가능
  }
  getItmes() {
    return this.items;
  }
}
