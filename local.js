var form=document.querySelector('#myform');
const nameinput=document.querySelector('#name');
const email=document.querySelector('#email');
const phone=document.querySelector('#phonenumber');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
localStorage.setItem('name',nameinput.value)
localStorage.setItem('email',email.value)
localStorage.setItem('phonenumber',phone.value)
}