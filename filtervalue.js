var arr=["x","y","z","x"]
 function filterduplicates(new_array){
    return new_array.filter((value,index) =>
    new_array.indexOf(value)===index);  
}  
document.write(filterduplicates(arr));  
 