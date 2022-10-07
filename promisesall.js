// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject) =>
//     setTimeout(resolve, 2000,'GoodBye')
// );
// Promise.all([promise1,promise2,promise3]).then(values =>console.log(values));

const user={
    name:'thaju',
    lastactivitytime:new Date().getTime()
};
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
const updatelastuseractivity=new Promise((resolve,reject) =>{
    setTimeout(()=>{
       user.lastactivitytime=new Date().getTime()
       resolve(user.lastactivitytime);
    },1000)
})

console.log(user.lastactivitytime);

Promise.all([createpost({title:'post3',body:'This is post3'}),updatelastuseractivity]).then(()=>{
    console.log(posts,`last activity time: ${user.lastactivitytime}`);
}).catch(error =>console.log(error));
Promise.all([createpost({title:'post3',body:'This is post3'}),updatelastuseractivity]).then(() =>{deletepost().then(()=>{
    console.log(posts);
}).catch(error =>console.log(error))}).catch(error => console.log(error));




