/*function declaration program
function wish()
{
    console.log("hello world")
}
wish()*/


/* function expression program
let data=function()
{
    console.log("hello")
}
data()*/


/* array function
const data=() =>
console.log("hiiii")
data()*/
  


// function add(num1,num2){
//    return num1+num2
//    }
//   add(2,4)
//   var result=add(2,4)
//   console.log(result)


function first(data)//data=second
{
    data()
    data()
}

first(second)
 
function second()
 {
     console.log("welcome")
 }
 // addition program using function
 function addition(a,b){
 console.log(a+b)
 }
 addition(3,4)
 addition(50,10)

 // function second program
 function greet(){
     console.log("hiiiii")
 }
 greet()

 // add two number using user input
//  function sum(x,y){
//      return x + y
//  }
//  let number1=parseFloat(prompt("enter the first number:"))
//  let number2=parseFloat(prompt("enter the second number:"))
//  let result=sum(number1,number2)
//  document.write("the sum is" + result)
 
 // substraction 

//  function sub(c,d)
//  {
//      return c-d
//  }
//  let num1=parseInt(prompt("enter the num:"))
//  let num2=parseInt(prompt("enter the second num:"))
//  let substraction1=sub(num1,num2)
//  document.write("the substraction is:" +substraction1)

 // function expression program
 let x1=function(cuberoot){
     return cuberoot*cuberoot*cuberoot
 }
 console.log(x1(4))
 let y1=x1(3)
 console.log(y1)

 // callback function program
 // main function
  function greetday(name,callback){
      console.log("hiii" +" " +name)
      callback()
  }
  // callback function
  function callMe(){
      console.log("this is callback function")
  }
  // passing function as an argument
  greetday("peter",callMe)

  //
  function greet() {
    console.log('Hello world');
}
// this is run first output is hello john
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);// this is call to greet function then print hello world
// setTimeout method use to  print result after 2000sec
sayName('John');
