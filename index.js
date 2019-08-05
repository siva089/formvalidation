let bt1 = document.getElementById("bt-1");
let bt2 = document.getElementById("bt-2");
let el1, el2, el3, el4, el5, el6, el7;
let valid,ty
bt1.addEventListener("click", e => {
  e.preventDefault();
  el1 = document.getElementById("el1").value;
  el2 = document.getElementById("el2").value;
  el3 = document.getElementById("el3").value;
  el4 = document.getElementById("el4").value;
  el5 = document.getElementById("el5").value;
  el6 = document.getElementById("el6").value;
  el7 = document.getElementById("el7").value;
ty = typeof parseInt(el7) === "number";

if (ty) {
   valid = parseInt(el7).toString().length === 6 ? true : false; 
}
const res=validate();
 
  if(res){
window.open("./index1.html", "_blank");
  }
}); 
function validate(){
    console.log(el1.length);
    
if (el1.length > 10 || el1.length===0) {
    
  return alert("First name should be 1 and 10 characters");
} else if (el2.length > 10 || el2.length===0) {
  return alert("Last name should be 1 and 10 characters");
} else if (el3.length > 6 || el3.length===0) {
  return alert("userId should be less 1 and 6 characters");
} else if (el4.length<7) {
  return alert("password length should be greater than 8");
} else if (!(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el5)
  )) {
  return alert("please enter a valid email");
} else if (el6.length > 20 || el6.length===0) {
  return alert("Address should be less than 20 characters");
} else if (el7.length !== 6) {
 
return alert("Enter a valid zipcode");

} 
else if(!valid){
return alert("Enter a valid zipcode");
}
  
  else {
              
               return true
            }
}
bt2.addEventListener("click",(e)=>{
e.preventDefault();
document.getElementById("el1").value="";
 document.getElementById("el2").value="";
 document.getElementById("el3").value="";
 document.getElementById("el4").value="";
 document.getElementById("el5").value="";
 document.getElementById("el6").value="";
 document.getElementById("el7").value="";
})


