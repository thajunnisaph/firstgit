const posts=[{title:'post1',body:'This is post1'},
{title:'post2',body:'This is post2'}];

function getposts(){
setTimeout(()=>{
    let output='';
    for(let i=0;i<posts.length;i++){
        
   output +=`<li>${posts[i].title}</li>`;
    }
    document.body.innerHTML = output;
},1000);
}
function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
        let error=false;
        if(!error){
            resolve()
        }
        else
        reject('error:something went wrong')
        },1000);
    })
    

}
function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             if(posts.length>0){
             resolve(posts.pop()); 
            }
        else
        reject('Array is empty now')
        },3000);
    })
}
//getposts();
createpost({title:'post3',body:'This is post3'})
.then(() =>{getposts();deletepost()
    .then(()=>{getposts();deletepost()
        .then(()=>{getposts();deletepost()
            .then(()=> {getposts();deletepost().catch(err=>console.log(err))}).catch(err=>console.log(err))}).catch(err =>console.log(err))}).catch(err=>console.log(err))}).catch(err =>console.log(err))

createpost({title:'post4',body:'This is post4'}).then(() =>{getposts();deletepost().catch(err=>console.log(err))}).catch(err =>console.log(err))
