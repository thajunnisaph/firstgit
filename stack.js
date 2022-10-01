class mystack{
    
    constructor(){
        this.stackarray=[];
        this.top=-1;
    
    }
  push(ele){
    this.top=this.top+1;
this.stackarray[this.top]=ele;
  }
  size(){
    return this.top+1;
  }
  pop(){
    if(this.size()>0){
    return this.stackarray[this.top--];}
    else{
        return 'stack is empty';
    }
    
  }
    peek()
    {
        return this.stackarray[this.top];
    }
    isEmpty(){
        return this.top<=-1;
    }
    isFull(){
        return this.top===this.stackarray.length-1;
    }

}
const stack=new mystack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.push(8);
//stack.pop();
console.log(stack.peek());
stack.push(4);
console.log(stack.pop());
console.log(stack.size());
console.log(stack.pop());
stack.push(3);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push(7);
console.log(stack.pop());
console.log(stack.pop());
//console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.isFull());
