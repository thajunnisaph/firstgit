var obj={num1:4,
num2:4};
var add=function(a,b,c){
return this.num1+a+b+c;
};
var a=[1,2,3]
console.log(add.apply(obj,a));
var average=function(n1,n2){
    return (this.num1+this.num2)/(n1+n2);
};
var arr=[2,2];
console.log(average.apply(obj,arr));

