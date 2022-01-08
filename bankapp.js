
// const login= document.getElementById("login")
// const username=document.getElementById("username")
// const pwd=document.getElementById("pwd")
// login.addEventListener('click',(e)=>{
// e.preventDefault()
// const username = login.username.value
// const pwd = login.pwd.value
// if (username === "user" && pwd === "web_dev") {
//     alert("You have successfully logged in.")
//    location.reload();
// }
// else{
//     alert("You have not successfully logged in.")
// }

 
// })
      function validatebank(){
          var username =document.bankapp.username.value;
         var pwd   =document.bankapp.pwd.value
         var pwd2 = document.bankapp.pwd2.value
          if(username == null || username == ""){
              alert("name not be blank")
              
              return false
              }else if(pwd.length<6){  
            alert("Password must be at least 6 characters long.");  
            return false;  
            }  
            if(pwd == pwd2 ){
                
                return true
            }
            else {
                alert("not match pwd")
                return false
            }
            // function openTab(url) {
            //     const link = document.createElement('a');
            //     link.href = url;
            //     link.target = '_blank';
            //     document.body.appendChild(link);
            //     link.click();
            //     link.remove();
            // }
        
      }

