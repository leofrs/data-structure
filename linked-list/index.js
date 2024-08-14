/* const n1 = {
  valor: 100,
};
const n2 = {
  valor: 200,
};
n1.pointer = n2;
console.log(n1);
 */

class Node {
  value = null;
  pointer = null;

  constructor(value, pointer) {
    this.value = value;
    this.pointer = pointer;
  }
}

class LinkedList {
  head = null;
  size = 0;

  constructor() {
    this.head;
    this.size;
  }

  // Adicionando sempre no head/inicio da lista
  addFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  // Exibindo todos os items na lista
  printAllList() {
    while (this.head) {
      console.log(this.head.value);
      this.head = this.head.pointer;
    }
  }

  printSizeOfList() {
    console.log(`O tamanho da lista é: ${this.size}`);
  }
}
const ll = new LinkedList();
ll.addFirst(100);

ll.printAllList();
ll.printSizeOfList();
