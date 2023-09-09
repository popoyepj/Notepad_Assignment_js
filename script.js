var take_input=document.querySelector(".text_area");
var save_val=document.querySelector(".save_button");
var clear_val=document.querySelector(".clear_button");


save_val.onclick=function(){
    localStorage.setItem("text",take_input.value);
}
clear_val.onclick=function(){
    localStorage.clear();
    take_input.value="";
}
function show(){
    take_input.value =localStorage.getItem("text");
}
show();