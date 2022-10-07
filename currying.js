let multiply=function(x,y){
console.log(x*y);
}
let multiplybytwo=multiply.bind(this,2);
multiplybytwo(4);
let multiplybythree=multiply.bind(this,3);
multiplybythree(5);
let multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplybytwo2=multiply1(2)
multiplybytwo2(2);
let multiplybythree3=multiply1(3)
multiplybythree3(4);