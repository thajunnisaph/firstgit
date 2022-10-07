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
   var editbutton=document.createElement('button');
   editbutton.className='btnedit';
   editbutton.style.backgroundColor='green';
   editbutton.appendChild(document.createTextNode('EDIT'));
   li.appendChild(editbutton);
   editbutton.addEventListener('click',() =>{
    e.target.name.value=objun.name;
    e.target.email.value=objun.email;
    e.target.phonenumber.value=objun.phone;
    li.remove();
    //localStorage.removeItem(`userdetails ${obj.email}`);
   });
   var deletebutton=document.createElement('button');
    //add classname
    deletebutton.className='btndelete';
    deletebutton.style.backgroundColor='red';
    //append textnode
    deletebutton.appendChild(document.createTextNode('X'));
    //append to li
    li.appendChild(deletebutton);
    deletebutton.addEventListener('click',() => {
        if(confirm('Are you sure you want to delete?')){
    li.remove();
    localStorage.removeItem(`userdetails ${obj.email}`);}
    });
   list.appendChild(li);  
}