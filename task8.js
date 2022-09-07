var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
//form submit event
form.addEventListener('submit',addnewitemtolist)
//delete event
itemlist.addEventListener('click',removefromlist)

function addnewitemtolist(e){
    e.preventDefault();
    //get input value
    var listitem=document.getElementById('item').value;
    //create new element
    var li=document.createElement('li');
    //add classname
    li.className='list-group-item';
    //add textnode with input value
    li.appendChild(document.createTextNode(listitem));
    //create delete button
    var deletebutton=document.createElement('button');
    //add classname
    deletebutton.className='btn btn-danger btn-sm float-right delete';
    //append textnode
    deletebutton.appendChild(document.createTextNode('X'));
    //append to li
    li.appendChild(deletebutton);
    //create a edit button
    var editbutton=document.createElement('button');
    //add classname
    editbutton.className='btn  btn-sm float-right';
    editbutton.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editbutton);
    //add to itemlist
    itemlist.appendChild(li);

}
function removefromlist(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?'))
    {
        var li=e.target.parentElement;
        itemlist.removeChild(li);
    }
}
}