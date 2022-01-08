const div = document.getElementById("mydiv")
const btn = document.getElementById("click")
btn.addEventListener('click',()=>
{
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value
    const result = ((weight)/(height)^2)
    const myh1 = document.createElement("h1")
    myh1.innerText = `the BMI is:${result}`
    div.append(myh1)
})