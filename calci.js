let status=false;
function on(){
    status=true;
    document.getElementById("result").value="0";
}
function dis(val){
    if(status==false){
        return;
    }
    result.innerText=document.getElementById("result").value;
    document.getElementById("result").value+=val;
    if(result.innerText=="0"){
        document.getElementById("result").value="";
        document.getElementById("result").value+=val;
    }
}
function clr(){
    if(status==false){
        return;
    }
    let a=document.getElementById("result").value;
    document.getElementById("result").value=a.toString().slice(0,-1);
    result.innerText=document.getElementById("result").value;
    if(result.innerText==""){
        document.getElementById("result").value="0";
    }
}
function allclr()
{
    if(status==false){
        return;
    }
    document.getElementById("result").value="0";
}
function solve()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
function log()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y=Math.log(x);
    document.getElementById("result").value=y;
}

function sqrt()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x);
    document.getElementById("result").value=y;
}
function sqr()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y=eval(x*x);
    document.getElementById("result").value=y;
}
function off()
{
    status=false;
    document.getElementById("result").value="";
}