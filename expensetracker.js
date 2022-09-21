document.addEventListener("DOMContentLoaded",(event) =>{
    var arr=Object.keys(localStorage);
    for(var i=0;i<arr.length;i++){
        var expensedet=JSON.parse(localStorage.getItem(arr[i]));
        createlist(expensedet);
    }    
})
var form=document.querySelector('#myform');
var list=document.querySelector('.expense_details');

form.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    const expensesum=e.target.expensesum.value;
    const description=e.target.description.value;
    const category=e.target.category.value;
    
    const obj={
        expensesum,
        description,
        category
    }
    localStorage.setItem(`expensedetails ${obj.description}`,JSON.stringify(obj))
    
   var objun=JSON.parse(localStorage.getItem(`expensedetails ${obj.description}`));
   
   createlist(objun);
}
   function createlist(objun){
   var li=document.createElement('li');
   li.className='expensedetails';
   li.appendChild(document.createTextNode(`  ${objun.expensesum}  `));
   li.appendChild(document.createTextNode(`  ${objun.description}  `));
   li.appendChild(document.createTextNode(`  ${objun.category}  `));
   var editbutton=document.createElement('button');
   editbutton.className='btnedit';
   editbutton.style.backgroundColor='green';
   editbutton.appendChild(document.createTextNode('Edit Expense'));
   li.appendChild(editbutton);
   editbutton.addEventListener('click',() =>{
    document.getElementById('expensesum').value=objun.expensesum;
    document.getElementById('description').value=objun.description;
    document.getElementById('category').value=objun.category;
    //console.log(objun);
   
    li.remove();
    localStorage.removeItem(`expensedetails ${objun.description}`);
   });
   var deletebutton=document.createElement('button');
    //add classname
    deletebutton.className='btndelete';
    deletebutton.style.backgroundColor='red';
    //append textnode
    deletebutton.appendChild(document.createTextNode('Delete Expense'));
    //append to li
    li.appendChild(deletebutton);
    deletebutton.addEventListener('click',() => {
        if(confirm('Are you sure you want to delete?')){
    li.remove();
    localStorage.removeItem(`expensedetails ${objun.description}`);}
    });
   list.appendChild(li);  
   document.getElementById('expensesum').value='';
   document.getElementById('description').value='';
   document.getElementById('category').value='';
}
