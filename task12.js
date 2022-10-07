var form=document.querySelector('#myform');
var list=document.querySelector('.booked_details');
form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const phone=e.target.phonenumber.value;
    const obj={
        name,
        email,
        phone
    }
    localStorage.setItem(`userdetails ${obj.email}`,JSON.stringify(obj))
   //localStorage.getItem(`userdetails ${obj.email}`);
   var objun=JSON.parse(localStorage.getItem(`userdetails ${obj.email}`));
   var li=document.createElement('li');
   li.className='userdetails';
   li.appendChild(document.createTextNode(`  ${objun.name}  `));
   li.appendChild(document.createTextNode(`  ${objun.email}  `));
   li.appendChild(document.createTextNode(`  ${objun.phone}  `));
   list.appendChild(li);  
}