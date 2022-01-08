//const img = document.createElement("img")
const mydiv1 = document.getElementById("mydiv2")

//img.setAttribute("src","dog.png")
for(let i=1;i<=500;i++){
const img = document.createElement("img")
img.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
img.setAttribute("width","100px")
img.setAttribute("height","80px")
img.setAttribute("class","data")// create class data
mydiv1.append(img)
}