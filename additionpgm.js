
// function displayAdd(num1,num2)
// {
//    let result=num1+num2
//     console.log(result)
// }
// displayAdd(30,20)

/*age program*/
// function displayAge(age)
// {
//     console.log(age)

// }
// displayAge(27)

/*thrid program*/
// const data=function(a,b)
// {
//     let c=a+b
//     console.log(c)
// }
// data(19,2)

/*forth program*/
const data=(a,b)=> //using array function
{
    console.log(a+b)
}
data(2,3)

/*fifth program*/
function add(num1,num2){
    let result=num1+num2
    return result
}
let output=add(10,20)
 console.log(output)
/* sixth program*/
const data1=(num1,num2)=>
{
 let result=num1+num2
 return result
}
let ans=data1(10,40)
console.log(ans)

/*even odd number using function program*/
function evenOdd(num)
{
    if(num%2==0)
    console.log("number is even")
    else{
        console.log("number is odd")
    }
}
evenOdd(20)

/*using arrow function even odd program*/
const evenOddPgm=(num)=>
{
    if(num%2==0)
    console.log("number is even")
    else{
        console.log("number is odd")
    }
}
evenOddPgm(21)

/*string interpolation*/
let name="raju"
let age=20
let city="pune"
console.log(`the name is ${name},his age is ${age},lives is in ${city}`)

function first(){
    return()=>{
        return 30
    }
}
let data3=first()
data3()


function first1()
{
   return()=>{ 
    console.log("trivenee")
     return()=>{
        return("welcome")
    }
}
}
let data4=first1()
let data5=data4()
console.log(data5)