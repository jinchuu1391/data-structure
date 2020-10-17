function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null; // 이전 노드를 가리키는 프로퍼티
  };

  let length = 0;
  let head = null;
  let tail = null; // 리스트의 마지막 원소를 가리키는 프로퍼티

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      // 유효한 범위인지 확인
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;
      if (position === 0) {
        // 리스트의 첫 번째 위치에 삽입하는 경우
        if (!head) {
          // 리스트가 비어 있는 경우
          head = node; // head와 tail이 삽입할 노드를 가리키게 한다
          tail = node;
        } else {
          // 리스트가 비어 있지 않은 경우
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;
      if (position === 0) {
        // 첫 번째 원소를 삭제할 때
        head = current.next;
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        // 마지막 원소를 삭제할 때
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      // 삭제하려는 위치가 유효하지 않은 값이면 null을 반환한다
      return null;
    }
  };
}
