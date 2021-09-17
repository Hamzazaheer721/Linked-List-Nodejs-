const Node = require("./Node");

// Linken list
class LinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  //inserting at the end
  insert(data) {
    //if null
    let node = new Node(data, this.head);
    if (this.size == 0) {
      this.head = node;
      this.head.next = null;
      this.size++;
    } else {
      let current = this.head;
      let node = new Node(data);
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let DList = new LinkedList();
DList.insert(10);
DList.insert(20);
DList.insert(30);
DList.print();
