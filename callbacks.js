const posts=[{title:'post1',body:'This is post1'},
{title:'post2',body:'This is post2'}];

function getposts(){
setTimeout(()=>{
    let output='';
    posts.forEach((post) =>{
        
   output +=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
},1000);
}
function createpost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)

}
//getposts();
createpost({title:'post3',body:'This is post3'},getposts);
createpost({title:'post4',body:'This is post4'},getposts);
