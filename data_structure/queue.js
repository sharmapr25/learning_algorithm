/*
QUEUE (FIFO)
  enqueue => inserting element into queue
  dequeue => taking out element that was insert first
*/
class Queue{
  constructor(){
    this.elements = [];
  }

  inqueue(element){
    this.elements.push(element);
  }

  dequeue(){
    return this.elements.shift();
  }

  print(){
    console.log('queue is: ', this.elements);
  }
}

const queue = new Queue();

queue.inqueue(3);
queue.inqueue(4);
queue.inqueue(5);
queue.inqueue(6);
queue.print();

console.log('dequeue element 1: ', queue.dequeue());
console.log("dequeue element 2: ", queue.dequeue());

queue.print();