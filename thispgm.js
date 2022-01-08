

// this keyword using function declaration 
const data = {
    "name":"ramu",
    "age":20,
    "displayName":function(){
        console.log(this.name)
        console.log(this.age)
    }
}

data.displayName() 

// second program using function expression
  function display(){
      console.log("good morning")
      console.log(this)
  }
  window.display()//not behaves in arrow function

  // arrow function always point to window object not possible use only function expression and function declaration
  const data1 = {
    "name1":"ramu",
    "age":20,
    "displayName1":()=>{
        console.log(this.name1)
        
    }
}
data1.displayName1() 

const employee = {
    "firstName": “Raju”,
    "lastName": “Chaudhury”,
    "id": 123
    "fullName": function() {
    return this.firstName + “ ” + this.lastName;
    }
    }
    employee.fullName()