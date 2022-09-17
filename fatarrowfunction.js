// let square= a =>a*a;
// console.log(square(3));
// let square = (a) =>{ return a*a};
// console.log(square(3));
var a=2;
let num= _ => {
    return a;
}
console.log(num());
var z=(a,b) => {
    return a*b;
}
console.log(z(3,4));
var x=function(){
    this.val=1;
    setTimeout(() =>{
        this.val++;
        console.log(this.val);
    },2000)
};
x();
var x=function(){
    console.log(arguments[1]);
}
x(2,3,4);
var z=(...n) =>{
    console.log(n[2]);
}
z(1,42,45,54)
