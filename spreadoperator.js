// const obj={
//     key1: 'val1',
//     key2:'val2'
// }
// const obj2={...obj,key1:'val',key3:'val3'}
// console.log(obj2);
// const obj3={
//     num1:3,
//     num2:4
// }
// const obj4={...obj,...obj3}
// console.log(obj4);
const arr=[1,2,3];
const arr1=[4,2,4]
const arr2=[...arr,...arr1]
const arr3=[...arr1,...arr]
console.log(arr2);
console.log(arr3);