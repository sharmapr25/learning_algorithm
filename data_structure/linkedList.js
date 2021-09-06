class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNext(nextNode){
    this.next = nextNode;
  }

  getNext(){
    return this.next;
  }

  getValue(){
    return this.value;
  }
}


class LinkedList{
  constructor(){
    this.count = 0;
    this.head = null;
  }

  insert(value){
    const nodeToInsert = new Node(value);
    nodeToInsert.setNext(this.head);
    this.head = nodeToInsert;
    this.count += 1;
  }

  find(value){
    let nodeToFind = this.head;
    while(nodeToFind != null){
      if(value === nodeToFind.getValue()){
        return nodeToFind;
      }
      nodeToFind = nodeToFind.getNext();
    }
    return null;
  }

  deleteAt(idx){
    if(idx > this.count - 1 ){
      return
    }
    if(idx == 0){
      this.head = this.head.getNext();
    }else{
      let tempIdx = 0;
      let node = this.head;
      while(tempIdx < idx - 1){
        node = node.getNext();
        tempIdx += 1;
      }
      node.setNext(node.getNext().getNext());

    }
    this.count -= 1;
  }

  print(){
    let node = this.head;
    console.log('total nodes are ', this.count);
    while(node != null){
      console.log('node:', node.getValue());
      node = node.getNext();
    }
  }
}


const linkedList = new LinkedList();
linkedList.insert(30);
linkedList.insert(58);
linkedList.insert(20);
linkedList.insert(5);
linkedList.print();

console.log('node to find ', linkedList.find(20));
console.log("node to find ", linkedList.find(1));

linkedList.deleteAt(2);
linkedList.print();