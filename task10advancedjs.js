var name=(arr)=>{
var count=0;
return ()=>{
    console.log(`Hello ${arr[count]}`);
    count++
}
}
const fn=name(['ram','shyam']);
fn();
fn();

