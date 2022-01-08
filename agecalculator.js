const div=document.getElementById("mydiv")
const btn=document.getElementById("click")
btn.addEventListener('click',()=>
{
    const myage = document.getElementById("age").value
    const days = myage * 365
    const myh1 = document.createElement("h1")
    myh1.innerText = `the days count is:${days}`
    div.append(myh1)
})