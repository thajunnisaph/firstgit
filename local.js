var form=document.querySelector('#myform');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
const nameinput=document.querySelector('#name').value;
const email=document.querySelector('#email').value;
const phone=document.querySelector('#phonenumber').value;

localStorage.setItem('name',nameinput)
localStorage.setItem('email',email)
localStorage.setItem('phonenumber',phone)
}