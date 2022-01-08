class First{
 display(){
     console.log("welcome")
 }
    display1(){
         console.log("hello")
     }
    
}
class Second extends First{

}
const s=new First()
s.display()
s.display1()