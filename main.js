var mouseevent = "empty"
var lastpositionofx,lastpositionofy;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black"
widthoftheline = 1;
canvas.addEventListener ("mousedown",my_mousedown)
function my_mousedown(e)  {
color = document.getElementById("color").value;
widthoftheline = document.getElementById("widthofline").value;
mouseevent = "mouseDown"
} 
canvas.addEventListener ("mousemove",my_mousemove)
function my_mousemove(e) {
    currentpositionofmousex = e.clientX - canvas.offsetLeft;
    currentpositionofmousey = e.clientY - canvas.offsetTop;
if( mouseevent == "mouseDown") {
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx. lineWidth = widthoftheline;
    console.log("lastpositionofxandy"+lastpositionofx,lastpositionofy);
    ctx.stroke()
}
    lastpositionofx = currentpositionofmousex;           
    lastpositionofy = currentpositionofmousey;                                                                                                                               ""
}
canvas.addEventListener("mouseleave",my_mouseleave) 
function my_mouseleave(e) {
    mouseevent = "mouseleave"
}
canvas.addEventListener("mouseup",my_mouseup) 
function my_mouseup(e) {
    mouseevent = "mouseup"
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.widthoftheline,ctx.canvas.height)
}
