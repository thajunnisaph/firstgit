var form=document.querySelector('#myform');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const phone=e.target.phonenumber.value;
    // const name=document.querySelector('#name').value;
    // const email=document.querySelector('#email').value;
    // const phone=document.querySelector('#phonenumber').value;

    const obj={
        name,
        email,
        phone
    }
localStorage.setItem('userdetails',JSON.stringify(obj))

}