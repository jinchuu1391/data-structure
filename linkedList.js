class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    let node = new this.Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  removeAt(position) {
    //삭제할 원소의 위치를 인자로 받음
    if (position > -1 && position < this.length) {
      //위치 값이 유효한지 확인(유효하지 않으면 null 반환)
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        //첫 번째 원소를 삭제하는 경우
        this.head = current.next;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let node = new this.Node(element);
      let current = this.head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  }

  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (element === current.element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }
}

// 리스트에 node를 추가하는 헬퍼 클래스
LinkedList.prototype.Node = class {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
};

module.exports = LinkedList;
