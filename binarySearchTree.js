class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new this.Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      // insertNode 함수에 루트와 새 노드를 인자로 호출해서 새 노드를 어디에 추가하면 좋을지 결정한다
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      // 새 노드의 키가 현재 노드의 키보다 작다면, 현재 노드의 좌측 자식 노드를 확인해본다
      if (node.left === null) {
        // 만약 좌측 자식 노드가 없다면 새 노드를 이 자리에 넣는다
        node.left = newNode;
      } else {
        // 만약 좌측 자식 노드가 있다면 insertNode 함수를 다시 재귀 호출해서 하위 레벨로 다시 내려간다
        // 다음에 비교할 노드는 현재 노드의 좌측 자식 노드가 된다
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        // 새 노드의 키가 현재 노드의 키보다 크고, 현재 노드에 우측 자식 노드가 없다면, 이 자리에 새 노드를 넣는다
        node.right = newNode;
      } else {
        // 만약 우측 자식 노드가 있다면, insertNode 함수를 다시 재귀 호출해서 하위 레벨로 다시 내려간다
        // 다음에 비교할 노드는 현재 노드의 우측 자식 노드가 된다
        this.insertNode(node.right, newNode);
      }
    }
  }
  // inOrderTraverse 메소드가 인자로 취하는 콜백 함수에는 노드 방문 시 수행할 작업할 기술한다
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    // 노드가 null인지 확인한다
    if (node !== null) {
      // 자기 자신을 재귀 호출해 좌측 자식 노드를 방문한다
      this.inOrderTraverseNode(node.left, callback);
      // 방문한 노드에 어떤 작업을 수행한다(callback)
      callback(node.key);
      // 그리고 우측 자식 노드를 방문한다
      this.inOrderTraverseNode(node.right, callback);
    }
  }
}

BinarySearchTree.prototype.Node = class {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
};

let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
function printNode(value) {
  console.log(value);
}
tree.inOrderTraverse(printNode);
