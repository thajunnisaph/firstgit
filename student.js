var student={
    name:'thaju',
    age:27

};
var printage=function(){
    console.log(`Student ${this.name}'s age is ${this.age}`);
};
var bound=printage.bind(student);
bound(this.name,this.age);
