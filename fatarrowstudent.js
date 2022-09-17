class Student{
    //static count=0;
    constructor(name,age,phonenumber,marks){
        this.name=name;
        this.age=age;
        this.phonenumber=phonenumber;
        this.marks=marks;
        //Student.count++;
    }
    placement(cutoff){
        return (minage) => {
            if(this.marks>=cutoff && this.age>=minage)
            {
                console.log(`${this.name} is eligible for placement`);
            }
            else {
                console.log(`${this.name} is not eligible for placement`);
            }
        }
    };
}
const stud1=new Student('thaju',18,7012506699,50);
const stud2=new Student('cheppu',17,5645767452,40);
const stud3=new Student('fathi',20,72344539,24);
const stud4=new Student('sumeer',19,33446699,39);
const stud5=new Student('nnisa',21,669234249,86);  
stud1.placement(40)(18);
stud2.placement(40)(18);
stud3.placement(40)(18);
stud4.placement(40)(18);
stud5.placement(40)(18);