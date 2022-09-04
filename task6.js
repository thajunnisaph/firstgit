// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 3px black';
// var input=document.querySelector('input');
// input.value='hello';
// var input1=document.querySelector('input[type="submit"]');
// input1.value='SEND';
// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// var item1=document.querySelector('.list-group-item:last-child');
// item1.style.color='blue';
 var item2=document.querySelector('.list-group-item:nth-child(2)');
 item2.style.backgroundColor='green';
 var item3=document.querySelector('.list-group-item:nth-child(3)');
 item3.style.visibility='hidden';
//queryselector all
// var titles=document.querySelectorAll('.title');
// console.log(titles);
//titles[1].textContent='hello';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }
var item2=document.querySelector('.list-group-item:nth-child(2)');
item2.style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
     odd[i].style.backgroundColor='green';
}
