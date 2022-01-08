class Student{
    static SchoolName="tilak high school"
    constructor(name,age){
       this.name="raju"
       this.age=20
    }
    getdata(){
    console.log(this.name)
    console.log(this.age)
    }
  static getSchoolName(){
       console.log(this.SchoolName)
    }
}
const s1=new Student()
console.log(s1.name)
console.log(s1.age)
console.log(s1.SchoolName)
s1.getdata()
Student.getSchoolName()// calling static method use class name


//Encapsulation concept