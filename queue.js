class queue{
    constructor(){
        this.arrqueue=[];
        this.front=0;
        this.rear=0;
    }
    push(x){
    this.arrqueue[this.rear]=x;
    this.rear=this.rear+1;
    }
    pop(){
        if(this.front==this.rear){
            return 'queue is empty';
        }
        else{
            const pop=this.arrqueue[this.front];
            this.arrqueue[this.front]=undefined;
            this.front=this.front+1;
            return pop;

        }
    }

}
const queue1=new queue();
queue1.push(1);
queue1.push(14);
queue1.push(5);
console.log(queue1.pop());
console.log(queue1.pop());
queue1.push(1);
console.log(queue1.pop());
console.log(queue1);