const data={
    "name":"raju",
    "age":25,
    "city":"pune"
}
console.log(data.age)
console.log(data.city)

// 2nd  object program FOR OF LOOP

const data1={
    "id":1,
    "name":"trivenee"
}
for(let i of Object.values(data1))//use Object.key also use.keys=id&name like that.
                        // use Obejct.entries for complete key value pair in array format.
{
    console.log(i)
}

// for in loop only point key
const data11={
    "id":2,
    "name":"xyz"
}
for(let i in data11){
    console.log(i)
}
// for in loop fetch values using []
const data10={
    "id":1,
    "name":"triveni"
}
for(let i in data10){
    console.log( data10[i])
}

// Arrray Destructuring 
const colors=["red","blue","green"]
const[a,b,c]=colors
console.log(colors)

// 2nd program

const datad=[10,20,30,40,50]
const[a1,b1]=datad
console.log(a1,b1)

//,,, and ... is remaing
const datad1=[10,20,30,40,50]
const[a12,,,b12]=datad1
console.log(a12,b12)

// 3rd program
 const datat={"name":"raju","age":20}
 const datar={"name":"ramu","age":21}
 const output1={...datat,...datar}
 console.log(output1)
 
 // 4th program

 const datag={"sport":"cricket","team":"india"}
 const datah={"sports":"cricket","team":"india"}
 console.log({...datah,...datag})
 
 // 5th program

 const datas={"name":"rajus","age":23}
 const {name,age}=datas
 console.log(datas)
 
 // 6th array program same as above using array
const dataj=["blue","orange","red"]
const [aj, ,bj]=dataj
console.log(dataj)

//7th program
const dataother={"name":"trivenee","ageo":27,"city":"pune"}
const {ageo,...bo}=dataother
console.log(ageo)
console.log(bo)

// const datam={"namek":"raju","ager":21,"cityp":"pune"}
// const {namek,...bn,c}=datam
// console.log(datam)

// object program using arrow function 
const datavalue={
    'add':(c,d)=>{
       console.log(c+d)
    },
    'sub':(c,d)=>{
        console.log(c+d)
    }
}
  datavalue.add(10,20)
  datavalue.sub(100,10)

  // 2nd program object program using function expression with this keyword
  const datax={
      "FirstName":"ramu",
      "displayName":function (){
      
          console.log(this)
          console.log(this.FirstName)
      }
  }
  datax.displayName()