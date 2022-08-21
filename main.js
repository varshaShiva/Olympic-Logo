canvas=document.getElementById("penCanvas");
ctx=canvas.getContext("2d");

function draw_fu(){
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=20;
ctx.arc(1000,200,130,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=20;
ctx.arc(1300,200,130,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=20;
ctx.arc(1600,200,130,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=20;
ctx.arc(1150,350,130,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=20;
ctx.arc(1470,350,130,0,2*Math.PI);
ctx.stroke();
}

function clear_fu(){
    document.getElementById("penCanvas").style.display="none";
}

function restart_fu(){
    document.getElementById("penCanvas").style.display="inline-block";
}