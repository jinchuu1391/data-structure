class Set {
  constructor() {
    this.items = {};
  }
  has(value) {
    return this.items.hasOwnProperty(value);
    // hasOwnProperty -> 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환한다
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value; // 키 - 값 쌍을 동일하게 저장해야 나중에 값을 찾기 편하다
      return true;
    }
    return false;
  }
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.keys(this.items);
  }
  union(otherSet) {
    let unionSet = new Set(); // 합집합을 담을 변수 생성
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      // 현재 인스턴스(첫 번째 set)의 원소를 결과 변수에 담는다
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      // otherSet(두 번째 set)의 원소를 결과 변수에 담는다
      unionSet.add(values[i]);
    }
    return unionSet;
  }
  intersection(otherSet) {
    let intersectionSet = new Set(); // 교집합을 담을 변수 생성
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      // 현재 인스턴스(첫 번째 set)에도 있고,
      if (otherSet.has(values[i])) {
        // otherSet(두 번째 set)도 가지고 있는 원소라면
        intersectionSet.add(values[i]); // 결과변수에 담는다
      }
    }
    return intersectionSet;
  }
  difference(otherSet) {
    let differenceSet = new Set(); // 차집합을 담을 변수 생성
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      // 현재 인스턴스(첫 번째 set)에는 있지만,
      if (!otherSet.has(values[i])) {
        // otherSet에는 없는 원소일 경우
        differenceSet.add(values[i]); // 결과변수에 담는다
      }
    }
    return differenceSet;
  }
  subSet(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        // 현재 인스턴스의 원소가 otherSet에도 존재하는지 확인한다
        if (!otherSet.has(values[i])) {
          return false; // 하나라도 otherSet에 존재하지 않으면 부분집합이 아니므로 false를 반환
        }
      }
      return true;
    }
  }
}
