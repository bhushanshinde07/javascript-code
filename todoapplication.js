const myol=document.createElement("ol")
const btn = document.getElementById("click")
const arr=[]
btn.addEventListener('click',function()
{
   const task= document.getElementById("task").value
 
    arr.push(task)
    const mydiv=document.getElementById("mydiv")
    const myli = document.createElement("li") //empty li
    myli.innerText=task
    myol.append(myli)
    mydiv.append(myol)
    document.getElementById("task").value=""
    const btn = document.createElement("button")
    btn.innerText="delete1"
    btn.setAttribute("class","btn")
    const updatebtn = document.createElement("button")
    updatebtn.innerText="update"
    updatebtn.setAttribute("class","updatebtn")
    myli.append(btn)
    myli.append(updatebtn)
   
     btn.addEventListener('click',function(){
        myli.remove()
       })
          updatebtn.addEventListener('click',function(){
           for(let i=0;i<arr.length;i++)
           {
               document.getElementById("task").value=arr[i]
               myli.remove()
           }
       })
      
    })

