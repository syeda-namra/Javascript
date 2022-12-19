// console.log("first")

// setTimeout(()=> {
//     console.log("second")
// },0)

// console.log("third")

const loginUser =(email,password,cb)=>{

    setTimeout(()=>{
        // return {message: "User logged in"}
        cb({email})  //callback
    },2000)
    
}

// console.log(loginUser())    //no argument to function
//result=undefined

// const getVideos=(email,callback) => {

//     setTimeout(()=>{
//         callback(["video1","video2","video3"])
//     },3000)
// }

// //callback hell line 29-36

// loginUser('namra@abc.com',12345, (em)=>{

//     console.log(em)
//     //line 34-37 callback
//     getVideos(em,(videos)=> {
//         console.log(videos)
//     })
// })

//first create object of promise or class 

// const checkResult= (myMarks)=>{//new Promise object bna raha hai
// const promise = new
//  Promise((resolve,reject)=> {
//     let myMarks =81

//     if(myMarks >80){
//         resolve('Promise Success')
//     }
//     else {
//         reject('Failed')
//     }
// })

// return promise

// }

// checkResult(81).then((message)=>{
//     console.log(message)
//     return "treat"
// })
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })

const loginUserPromise =(email ,password)=> {

    return new Promise ((resolve,reject)=>{

        setTimeout(()=> {
            if (email =="namra@abc.com" && password ==12345) {
                resolve(email)
            }
            else{
                reject("Invalid email & password")
            }
        },2000)
    })
}

const getVideosPromsie=(email)=>{
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            if (email){
                resolve (["videos1","videos2"])
            }
            else{
                reject("Email missing")
            }
        },3000)
    })
}

// loginUserPromise ("namra@abc.com",12345)
//     .then((email)=>{
//         console.log(email)
//         return getVideosPromsie()
//     })

//     .then((videos)=>console.log(videos))
//     .catch((err)=>{
//         console.log(err)
//     })

const getUserDetails =async() => {

    try {
        const email = await loginUserPromise("namra@abc.com",12345)
        console.log(email)
        const videos= await getVideosPromsie(email)
        console.log(videos)

    }
    catch(err){
        console.log(err)     
    }
    
}

getUserDetails()

console.log("first")