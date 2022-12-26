
var Clock=()=>{
var D=new Date();
var hh=document.getElementById('hh').innerText=D.getHours();
var mm=document.getElementById('mm').innerText=D.getMinutes();
var ss=document.getElementById('ss').innerText=D.getSeconds();
var ampm=document.querySelector('h2');


// formatting am_pm
if(hh>=12){
    ampm.innerText="PM"
}
else{
    ampm.innerText="AM"
}


// formatting time 
if(hh>12){
    hh=hh-12
}

}
setInterval(Clock,1000);