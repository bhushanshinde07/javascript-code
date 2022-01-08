
// let flat=["1BHK",250000,"2BHK",650000,"1BHK",true]
// // let len=flat.length

//     console.log(Object.keys(flat) )
//     console.log("size="+Object.keys(flat).length)

let arraydata=[10,20,30,40,50] // forEach array function program
arraydata.forEach((x)=>
{
  console.log(x*2)
})
// foreach pgm
let info=["xyz","abc","yui"]
info.forEach((y)=>{
console.log(y)
})
  
  
  // for each pgm
    let schoolinfo=["tilak high school","garware college","morden high school"]
    schoolinfo.forEach((schoolname)=>{
      console.log(schoolname)
    })

// aad elements in aaray using for each 
let students = ['John', 'Sara', 'Jack'];
// using forEach
students.forEach(myFunction);
function myFunction(item, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item;
}

console.log(students);

let arraydata1=["ramu","raju","john"] // forEach array function program
arraydata1.forEach((x,y,z)=>
{
  console.log(x.toUpperCase())
  console.log(y)
  console.log(z)
})

let arrmap=[10,20,30]
 const result=arrmap.map((a)=>{ //Map array function
     return a/2
 })
 console.log(result)

 let arrmap1=[10,20,31]
 const result1=arrmap.map((a)=>{
   if(a%2==0){
       return a
   }
})
 console.log(result1)


 //filter program1
let filtdata=[10,20,31]
const result2=filtdata.filter((a)=>{
    if(a%2==0)
    {
        return a
    }
})
console.log(result2)
 //filter program 2
 let data7=[1,2,3,4]
const resultf=data7.filter((a)=>{
    return a+1
})
console.log(resultf)
 
// reducefunction
const datared=[10,20,30,40]
const result89=datared.reduce((acuumulator,currentvalue)=>{
  return acuumulator+currentvalue
})
console.log(result89)

//greatest number sign is > and smallest number sign is <
const datagret=[10,20,30,40]
const result8=datagret.reduce((acuumulator,currentvalue)=>{
  if(acuumulator>currentvalue){ // > for greatest ,< for smallest value
    return acuumulator
  }
 else{
   return currentvalue
 }
})
console.log(result8)

// find ()
let datafind=[10,20,30,40]
let resultfind=datafind.find((datafind)=>{
  if(datafind>15){
    return datafind
  }
})
console.log(resultfind)


// find () program
let datafind1=[30,40,100,200]
let resultfind1=datafind1.find((ele)=>{
  if(ele>15){
    return ele
  }
})
console.log(resultfind1)

const datas=["mr.raju","Mr.ramu"]
const results=datas.find((ele)=>
{
   return ele.startsWith("Mr")
})
console.log(results)

//every ()
const datae1=[10,20,-33]
const resulte=datae1.every((ele)=>
{
  if(ele<100){
    return ele
  }
})
console.log(resulte)

//some()
const datae11=[10,20,-33]
const resultes=datae11.some((ele)=>
{
  if(ele>100){
    return ele
  }
})
console.log(resultes)

//Rest operator
function display(a){
  console.log(a)
}
display(10)

//rest operator (...)
function display1(...a){
  console.log(a)
}
display1(10,2,12)

//spread operator(...)
function displaysp(a,b,c)// argument pass
{
  console.log(a)
  console.log(b)
  console.log(c)
}
let arr=[19,29,39]
displaysp(...arr)//for separat element print use (...)

//spread operator prgram for all element print 
function displays(a)
{
  console.log(a)
  
}
let arr1=[19,29,39]
displays(arr)
//spread operator
function collect (a,b){
  console.log(a)
  console.log(b)
}
const datasp=(10,"ramu")
collect(datasp)

//spread operator
const a1=[10,20]
const a2=[30,40]
const a3=[...a1,...a2]
console.log(a3)

// for of loop

const datat=[10,20,30]
for(let i of datat){
  console.log(i)
}

//own practice program of array

let pnumber=[10,20,30,40]
 pnumber.push(50)
console.log(pnumber)// add number at end in an array

// string elemnets add in an array
let bookname=["java","database","html"]
bookname.push(".net")
console.log(bookname)

//  fruit push
let fruitname=["apple","mango"]
fruitname.push("banana")
console.log(fruitname)
 
// name class
let classname=["firstclass","secondclass","thridclass"]
classname.push("fourthclass")
console.log(classname)

// pop elements 
let city=["pune","kolhapur","nagpur","nashik"]
city.pop()  // use only pop() using pop end element remove from an array
city.pop()
console.log(city)
 
// vehical 
let vehical=["car","bus","airoplain","cycle","twowheler"]
vehical.pop()
vehical.pop()
vehical.pop()
console.log(vehical)

// unshift arary add elements to an array in first position
let cityname=["mumbai","karnataka","goa"]
  cityname.unshift("pune")
  console.log(cityname)
 
  // using shift remove first element from  an array
  let fruitlist=["apple","mango"]
fruitlist.shift()
console.log(fruitlist)

// lenght  using this method count the lenght of an array
let countryname=["India","UK","US"]
console.log(countryname.length)