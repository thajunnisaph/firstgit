function sum(num1,num2){
 num1=num1+2+num2;
 return (num3)=>{
    num3++;
    return (num4)=>{
   let s=num3+num4+num1;
   return s;
    }
    
 }
}
const sum1=sum(1,2)(3);
console.log(sum1(4));