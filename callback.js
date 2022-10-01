function attcheventlistener(){
var count=0;
document.getElementById('clickme').addEventListener("click",function x(){
console.log('clicked me',count++);
});
}
document.addEventListener("DOMContentLoaded",function y(){
    console.log('DOM has loaded');
})
attcheventlistener();