
function add(value){
    document.getElementById("display").value+=value;
}
function clr(){
    document.getElementById("display").value=""
}
function cal(){
    var exp=document.getElementById("display").value;
    var res;
    try {
        res=eval(exp);
        document.getElementById("display").value=res;
    } catch (error) {
        document.getElementById("display").value="Error";
    }
}
function cls(){
    var a1=document.getElementById("display").value;
    a1=a1.slice(0,-1);
    document.getElementById("display").value=a1
}

document.addEventListener("keydown",(event)=>{
   cod=event.code;
   cod=cod.slice(0,6);
    if(event.key=="Enter" || event.key=='=')
        cal();
    else if(event.key=="Backspace")
        cls();
    else if(event.key=="Delete")
        clr();
    else if((parseInt(event.key)>=0 && parseInt(event.key)<=9)|| (event.key=='(' || event.key==')'|| event.key=='*'|| event.key=='+'|| event.key=='-' || event.key=='/'))
        add(event.key);
    else if (cod=='Numpad')
        add(event.key);
})