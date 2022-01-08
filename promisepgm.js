const movie=new Promise((resolve,reject)=>
{
 let databaseconnection=true
 if(databaseconnection){
     resolve("I have been successfully connect")
     }
     else{
         reject("I have not been successfully connect")
     }
})
movie.then(()=>{
    console.log("here is code to fetch data")
}).catch((e)=>
{
console.log(e)
})

// async prgram
const movie1=async()=>
{
    const connection=true
    if(connection){
        return "I have been successfully connect"
    }
    else{
     throw "error"
    }
}

movie1().then(()=>
{
    console.log("details are")
})

// movie1() write on console directly

let complete1 = false
let promise1 = new Promise( function (resolve,reject)
{
   if(complete1){
            resolve("successfull")
    }
    else{
        reject("not successfull")
    }
})
console.log(promise1)