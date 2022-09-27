const posts=[{title:'post1',body:'This is post1',CreatedAt:new Date().getTime()},
{title:'post2',body:'This is post2',CreatedAt:new Date().getTime()}];
let intervalid=0;
function getposts(){
clearInterval(intervalid);
intervalid=setInterval(()=>{
    let output='';
    for(let i=0;i<posts.length;i++){
        
   output +=`<li>${posts[i].title}- created ${Math.round((new Date().getTime()-posts[i].CreatedAt)/1000)} seconds ago</li>`;
    }
    document.body.innerHTML = output;
},1000);
}
function createpost(post,callback){
    setTimeout(()=>{
        posts.push({...post,CreatedAt:new Date().getTime()});
        callback()
    },2000)

}
function create4thpost(post,callback){
    setTimeout(()=>{
        posts.push({...post,CreatedAt:new Date().getTime()});
        callback()
    },5000)
}
function lasteditedinsecondsago(){
    
    clearInterval(intervalid);
    intervalid=setInterval(()=>{
    let output='';
    for(let i=0;i<posts.length;i++){
        
   output +=`<li>${posts[i].title}- last edited ${Math.round((new Date().getTime()-posts[i].CreatedAt)/1000)} seconds ago</li>`;
    }
    document.body.innerHTML = output;
},1000);
       

}
//getposts();
createpost({title:'post3',body:'This is post3'},lasteditedinsecondsago);
// create4thpost({title:'post4',body:'This is post4'},getposts);
