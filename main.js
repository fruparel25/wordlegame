var h=6; //no of guesses
var w=5;

var r=0; //start first try
var c=0; //start letter

var end=false;
var word="FALSE";

window.onload=function()
{
    start();
}

function start(){
    for(let r=0;r<w;r++)
    {
        for(let c=0;c<h;c++)
        {
            let t=document.createElement("span");
            t.id=r.toString()+"."+c.toString();
            t.classList.add("tl");
            t.innerText="";
            document.getElementById("b1").appendChild(t);
        }
    }
}

