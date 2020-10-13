class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
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

/*
[환형 큐] 예시
- 뜨거운 감자 게임 : 뜨거운 감자를 옆 사람에게 넘기다 갑자기 멈췄을 때 감자를 가진 사람을 아웃 시키고 마지막 한 사람이 남을 때 까지 반복하는 게임
- nameList : 게임 참가자 명단(배열)
- num : 큐를 순회할 횟수
*/
function hotPotato(nameList, num) {
  let queue = new Queue(); // Queue 인스턴스 생성

  for (let i = 0; i < nameList.length; i++) {
    // 게임 참가자 명단을 큐에 추가
    queue.enqueue(nameList[i]);
  }

  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // 맨 앞 원소를 꺼내서 맨 뒤에 다시 넣음
    }
    eliminated = queue.dequeue(); // num 만큼 반복한 뒤 뜨거운 감자를 들고 있는 사람 퇴장
    console.log(eliminated + "퇴장");
  }

  return queue.dequeue(); // 승자
}
