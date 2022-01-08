
function myclear(){
   // var inputdata=document.getElementById("myinput").value// 1234 store
    document.getElementById("myinput").value=""
}
function collect(number){ //9 number enter
    document.getElementById("myinput").value = document.getElementById("myinput").value + number // input box empty += 2 is 2 
}
function myresult(){
 document.getElementById("myinput").value = eval(document.getElementById("myinput").value)
}
function removedata(){
    const mydata = document.getElementById("myinput").value //
    document.getElementById("myinput").value=mydata.slice(0,-1)
}
     
     
