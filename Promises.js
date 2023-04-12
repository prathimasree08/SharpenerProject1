/*const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => 
   setTimeout(resolve,2000,'Goodbye')
);
Promise.all([promise1,promise2,promise3]).then(values => console.log(values));*/


const posts=[];
function createPost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           let post = 'post1';
           posts.push(post);
            resolve(post);

        },3000)



    })
}
const user = {
    username:'prathima',
    lastactivitytime: '12th of april'
}
function updatelastactivitytime() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime)

        },1000)
    })
}

Promise.all([createPost(),updatelastactivitytime()]).then(values => console.log(values));



