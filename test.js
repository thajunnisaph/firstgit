let expense=[];
localStorage.setItem(expense,[1,2,3])
window.addEventListener('DOMContentLoaded',() =>{
    expense=JSON.parse(localStorage.getItem('expense'))
    console.log(expense);
})