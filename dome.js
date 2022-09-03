//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title="hello";
//console.log(document.all[10]);
//console.log(document.forms[0]);
//console.log(document.body);
//console.log(document.head);
//console.log(document.links);
//console.log(document.images);
// var header=document.getElementById("main-header");
// header.style.borderBlock='solid 3px black';
// var title=document.all[14];
//title.style.color='green';
//title.style.fontWeight='bold';
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello';
items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';

items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
   // items[i].style.backgroundColor='#f4f4f4';
    items[i].style.fontWeight='bold';
    items[i].style.color='blue';
}

