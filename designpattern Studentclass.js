class Student{
    static count=0;
    constructor(name,age,phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.marks=marks;
        Student.count++;
    }
    Eligibleornot(){
        if(this.marks>=40){
            console.log(`${this.name} is eligible for higher studies`);
        }
        else {
        console.log(`${this.name} is not eligible for higher studies`);
        }

    }
    studentregisterationcount(){
        console.log(`total no of students created is ${Student.count}`);
    }

}
const stud1=new Student('thaju',16,7012506699,50);
const stud2=new Student('cheppu',17,5645767452,40);
const stud3=new Student('fathi',20,72344539,24);
const stud4=new Student('sumeer',19,33446699,39);
const stud5=new Student('nnisa',21,669234249,86);    
stud3.Eligibleornot();
stud1.studentregisterationcount();