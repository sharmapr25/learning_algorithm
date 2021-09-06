/*
STACK (LIFO)
  push => insert item on top
  pop => bring out item on top
  top => a pointer that point the recent item in stack
*/
class Stack{
  constructor(){
    this.top = 0;
    this.items = [];
  }

  push(item){
    this.items.push(item);
    this.top += 1;
  }

  pop(){
    const itemToPop = this.items[this.top-1];
    this.items = this.items.filter(item => item !== itemToPop);
    this.top -= 1;
    return itemToPop;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);

console.log(stack);

console.log('popped item: ', stack.pop());
console.log(stack);





