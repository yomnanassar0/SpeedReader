var newtx;
var sp = 500;
var f = true;
let ct=0;
var x=document.getElementById("div").innerHTML;
var stpbt = document.getElementById("stp");
var strbt = document.getElementById("str");

stpdisable();
strenable();


function play()
{

stpenable();
strdisable();
splitstr();
if(f!=false)
{

dis();

}
}

function timer()
{
setTimeout(dis, sp);
}
function stop(){

    f = false;
    strenable();
    stpdisable();
    clearTimeout(x);


}

function strenable()
{
  strbt.disabled = false;
  strbt.style.backgroundColor ="white";
}

function stpenable()
{
  stpbt.disabled = false;
  stpbt.style.backgroundColor ="white";
}
function stpdisable(){
stpbt.disabled = true;
stpbt.style.backgroundColor ="grey";
}

function strdisable(){
strbt.disabled = true;
strbt.style.backgroundColor ="grey";
}



function splitstr()
{

x=document.getElementById("input").value;

var tx = x.replaceAll(/;|!|\?|\.|\:|\,/g, "");
newtx = tx.split(" ");

}



function dis(){


if( ct<+newtx.length && f!=false )
{
document.getElementById("div").innerHTML=newtx[ct];
ct++;

}

else {
stop();
x="";
f = true;
ct=0;
return;


}
timer();

}
