var text=document.getElementById("text");
var msg=document.getElementById("status");
var strong=document.getElementById("st");

text.addEventListener("input",()=>{
    if(text.value.length>0){
        msg.style.display="block";
    }
    else{
        msg.style.display="none";
    }
    if(text.value.length<4){
        strong.textContent=" weak";
        strong.style.color="red";
        text.style.boxShadow ="0px 0px 5px 5px red";
    }
    else if(text.value.length<7){
        strong.textContent=" medium";
        strong.style.color="yellow"
        text.style.boxShadow ="0px 0px 5px 5px yellow";
    }
    else if(text.value.length<9){
        strong.textContent=" strong";
        strong.style.color="green"
        text.style.boxShadow ="0px 0px 5px 5px green";
    }
    
});