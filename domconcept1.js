const mychange = document.getElementById("change")
const myinfo = document.getElementById("info")
const myresetbtn = document.getElementById("reset")

mychange.addEventListener('click',()=>
{
    myinfo.style.color="brown"
})
 myresetbtn.addEventListener('click',()=>
{
    myinfo.style.color="pink"
})