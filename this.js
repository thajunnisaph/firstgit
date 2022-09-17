// this.food={
//     breakfast:'dosa',
//     lunch:'meals',
//     dinner:'chappathi'
// };

// // console.log(this.food.lunch);
// // let Employee={
// //    name:'thaju',
// //     age:27,
// //     lunch:'friedrice',
// //     age() {
// //         if(this.age>18) return 'valid';
// //  else return 'invalid';    }

// // };
// // console.log(Employee.age());
// // this.lunch='biriyani';
// // const order=function(n){

// //     console.log(`${this.lunch} wants ${n} plate`);
// // }
// // order.call(this.food,2);
// // order.call(this,3);
// // order.call(Employee,1);
// const order=function(n){
//     const orderfordinner= function(n1){
//         console.log(`${this.dinner} wants ${n1} plate`); 
//     }
//     orderfordinner.call(this.food,3);

// }
// let createstudent=function(name){
//     this.class=`${name}'s class`;
//     }
//     const thajus=new createstudent('thaju');
//     const sheppu=new createstudent('cheppu');
//     createstudent.prototype.branchallocation=function(branch){
//         console.log(`student ${this.class} is${branch} `);
//     }
//     thajus.branchallocation('ECE');
class createstudent{
    constructor(name){
        this.name=name;
        this.class=`${name}'s class`;
    }
    allocatebranch(branch){
        console.log(`${this.name} branch is ${branch}`);
    }
}
const stud1=new createstudent('thaju');
stud1.allocatebranch('ECE');