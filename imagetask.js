const myimg = document.getElementById("myimg")
console.log(myimg)
const mybtn = document.getElementById("btn")
mybtn.addEventListener('click',()=>{
   // myimg.src="dog.png" or
   myimg.setAttribute("src","dog.png")

})