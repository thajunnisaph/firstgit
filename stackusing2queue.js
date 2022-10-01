class Queue{
  constructor(){
      this.arr = [];
      this.front = 0;
  }
  
  push(a){
      this.arr.push(a);
  }
  
  pop(){
      if(this.arr.length != this.front){
          let x = this.arr[this.front];
          this.front++;
          return x;
      }
      else
          return -1;
  }
  
  front_ele(){
      return this.arr[this.front];
  }
  
  empty(){
      if(this.arr.length != this.front)
          return false;
      else
          return true;
  }
}
class QueueStack{

    constructor(){
  
      this.q1 = new Queue();  
  
      this.q2 = new Queue();  
  
    }
  
     
  
    
  
    //Function to push an element into stack using two queues.
  
    push(x){
  
      // code here
  
      while(!this.q1.empty())
  
      {
  
       let k= this.q1.pop();
  
       this.q2.push(k);
  
         
  
      }
  
      this.q1.push(x);
  
      while(!this.q2.empty()){
  
        let k=this.q2.pop();
  
        this.q1.push(k);
  
      }
  
    }
  
     
  
   
  
     
  
    //Function to pop an element from stack using two queues. 
  
    pop(){
  
      // code here
  
      if(!this.q1.empty()){
  
        let r=this.q1.pop();
  
        return r;
  
      }
  
      return 'stack is empty';
  
    }
  
  }
  const stack1=new QueueStack();
  stack1.push(1);
  stack1.push(3);
  stack1.push(5);
  console.log(stack1.pop());
  console.log(stack1.pop());
  console.log(stack1.pop());
  console.log(stack1.pop());
  stack1.push(6);
  stack1.push(5);
  console.log(stack1.pop());