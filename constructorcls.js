// first program using constructor

class Stduent{
    constructor(){
       const name="raju"
       console.log(name)

    }
}
const s1= new Stduent();
 // second prgram

 class Employee{
    constructor(){
     const   age=30;//instance variable
        console.log(age)
    }

}
const e1=new Employee();


// third program using constructor
class Book{
    constructor(title,author,page){
      // local variable and instance variable should be always same
        this.title=title //using this keyword  create any variable it should be always instance variable
        this.author=author 
        this.page=page
        console.log(this.title)
        console.log(this.author)
        console.log(this.page)
    }

}
const b1= new Book("javascript","netscape",250)
const b2= new Book("python","xyz",400)

// fourth program

class Food{
constructor(name,cost){
this.name=name
this.cost=cost
}
   getdata() {
  console.log(this.name)
  console.log(this.cost)
    
}
}
const f1= new Food("Idli",40)
f1.getdata()