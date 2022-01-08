class Animal{
    eat(){
        console.log("I can eat")
    }
    walk(){
        console.log("I am walk")
    }
}
class Dog extends Animal{
foodtype(){
    console.log("I am vegetarian")
}
}
class Tiger extends Animal{

}

const a=new Animal

a.eat()
a.walk()

// second program in inheritance using super keyword
class Person{
    constructor(name,age,city,mbno){
    this.name=name
    this.age=age
    this.city=city
    this.mbno=mbno
    }
    display(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.city)
        console.log(this.mbno)
    }
}
class Employee extends Person{
    constructor(name,age,city,mbno,salary){
        super(name,age,city,mbno)// super for code reuse
        this.salary=salary
    }
    display1(){
    super.display()
    console.log(this.salary)
    }
}
 const p1= new Person("raju",20,"pune",12344)
 const e1= new Employee("ramu",21,"mumbai",1234566,400000)
 p1.display()
 e1.display1()


// method overriding
 class Perent{
     gold(){
         console.log("I have gold")
     }
 }
 class Son extends Perent{
     gold()
     {
         console.log("I cannot take gold now")
     }
 }
 const p1s= new Perent()
 const p1son= new Son()
 p1s.gold()
 p1son.gold()

 // method overloading not possible but last one function is execute every time
 function add(a,b){
     console.log(a+b)
 }
 function add(a,b,c){
    console.log(a+b+c)
}
function add(a,b,c,d){
    console.log(a+b+c+d)
}
add(10,20)
add(10,20,30)
add(10,20,30,40)

// synchronous program
console.log("hii")
console.log("Hello")
console.log("welcome")

// asynchronous program
console.log("hii")
setTimeout(()=>{
    console.log("welcome")
},3000)
console.log("hello")