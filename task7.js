//parentNode
// var itemlist=document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);
var itemlist=document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);
//childnode
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor='blue';
// //firstchild
// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello';
// console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='hello';
//nextsibling
//console.log(itemlist.nextSibling);
//nextelementsibling
// console.log(itemlist.nextElementSibling);
//itemlist.firstElementChild.textContent='hello';
//previous sibling
// console.log(itemlist.previousSibling);
//previouselementsibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='blue';
//createElement
//create a div
var newdiv=document.createElement('div');
//add id
newdiv.id='hello';
//add classname
newdiv.className='hello1';
//add attribute
newdiv.setAttribute('title','Hellodiv');
//create textnode
var newdivtext=document.createTextNode('HEllo');
//add text to div
newdiv.appendChild(newdivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);
//newdiv.style.fontSize='30px';
console.log(newdiv);
var newdiv1=document.createElement('div');
//add id
newdiv1.id='hello1';
//add classname
newdiv1.className='hello2';
//add attribute
newdiv1.setAttribute('title','Hellodiv2');
//create textnode
var newdivtext1=document.createTextNode('HEllo');
//add text to div
newdiv1.appendChild(newdivtext1);
var list=document.querySelector('div .list-group');
var item1=document.querySelector('.list-group-item:first-child');
list.insertBefore(newdiv1,item1);






