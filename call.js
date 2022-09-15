var obj={num:2,
num2:4};
var addTOthis=function(a,b,c){
    return this.num+a+b+c;
}
console.log(addTOthis.call(obj,4,5,6));
var average=function(n){
    return (this.num+this.num2)/n;
}
console.log(average.call(obj,2));