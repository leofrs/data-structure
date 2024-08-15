/*Each node in a linked list contains data and a reference to the next node. In JavaScript, you can create this using a class.*/
class Node {
  value = null;
  next = null;
  constructor(value) {
    this.value = value;
    this.next;
  }
}
/*The linked list class will manage the nodes. It typically has methods to add, remove, and display nodes. */
class LinkedList {
  head = null;
  size = 0;

  constructor() {
    this.head;
    this.size = 0;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  printList() {
    let current = this.head;
    let list = ``;

    if (this.size === 0) return console.log("Lista Vazia");

    while (current !== null) {
      list += `${current.value} -> `;
      current = current.next;
    }

    console.log(list + null);
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.printList();
