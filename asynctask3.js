const posts=[{title:'post1',body:'This is post1'},
{title:'post2',body:'This is post2'}];

const post= async() =>{
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
const  getposts= await new Promise((resolve,reject)=>{
 setTimeout(()=>{
    let output='';
    for(let i=0;i<posts.length;i++){
        
   output +=`<li>${posts[i].title}</li>`;
    }
    document.body.innerHTML = output;
 },1000);
 });

 const deletepost=await new Promise((resolve,reject)=>{
        setTimeout(()=>{
             if(posts.length>0){
             resolve(posts.pop()); 
            }
        else
        reject('Array is empty now')
        },3000);
    })
}
