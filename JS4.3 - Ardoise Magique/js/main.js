var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var btnClear=document.getElementById("tool-clear-canvas")


function getMousePos(event) {
  var style = window.getComputedStyle(canvas);
  console.log(style);
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left - parseInt(style.borderLeftWidth),
    y: event.clientY - rect.top - parseInt(style.borderTopWidth),
  };
}

//// draw a line ////
var verif=false
function onMouseDown(event){
    var pos=getMousePos(event)
    ctx.beginPath()
    ctx.moveTo(pos.x,pos.y)
    verif=true
    console.log(pos);
}

function onMouseMove(event){
if(verif==true){
var pos1=getMousePos(event)

ctx.lineTo(pos1.x,pos1.y)
ctx.strokeStyle=color
ctx.lineWidth=size
ctx.stroke()
console.log(pos1);
}
}
function onMouseUp(){
    verif=false
}
canvas.addEventListener("mousedown",onMouseDown)
canvas.addEventListener("mousemove",onMouseMove)
 canvas.addEventListener("mouseup",onMouseUp)



 ///function clear////
 
 function clear(){
 ctx.clearRect(0,0,canvas.width,canvas.height)
}
btnClear.addEventListener("click",clear)

/////////////function change color//////////

 var pen=document.querySelectorAll(".pen-color")
var color
 function changeColor(){
  for(let i=0;i<pen.length;i++){
    pen[i].addEventListener("click",function(event){
    
    if(event.target.matches("ul .pen-color")&&pen[i]!=event.target.dataset.color){
      color=event.target.getAttribute("data-color")
      // ctx.strokeStyle=pen[i]
      console.log(color)
  
   }
  })
 }
 }
 changeColor()


 /////////function chande width//////////

 var epais=document.querySelectorAll(".pen-size")
 var size
  function changeSize(){
   for(let i=0;i<epais.length;i++){
     epais[i].addEventListener("click",function(event){
     
     if(event.target.matches("ul .pen-size")&&epais[i]!=event.target.dataset.size){
       size=event.target.getAttribute("data-size")
       // ctx.strokeStyle=pen[i]
       console.log(size)
   
    }
   })
  }
  }
  changeSize()

     
  ///////////gradient color/////////
  var canvas1=document.getElementById("color-palette")
  var btnGrad=document.getElementById("tool-color-picker")
 var ctx1=canvas1.getContext("2d")


function addLinearGradient(){
   var grd=ctx1.createLinearGradient(0,0,canvas1.width,0)

  grd.addColorStop(0,    'rgb(255,   0,   0)');
   grd.addColorStop(0.15, 'rgb(255,   0, 255)');
   grd.addColorStop(0.32, 'rgb(0,     0, 255)');
   grd.addColorStop(0.49, 'rgb(0,   255, 255)');
   grd.addColorStop(0.66, 'rgb(0,   255,   0)');
   grd.addColorStop(0.83, 'rgb(255, 255,   0)');
   grd.addColorStop(1,    'rgb(255,   0,   0)');
  ctx1.fillStyle = grd; 
  ctx1.fillRect(0,0,canvas1.width,canvas1.height);
  grd=ctx1.createLinearGradient(0,0,0,canvas1.height)
  grd.addColorStop(0,"rgba(255,255,255,1)")
  grd.addColorStop(0.5,"rgba(255,255,255,0)")
  grd.addColorStop(0.5,"rgba(0,0,0,0)")
  grd.addColorStop(1,"rgba(0,0,0,1)")
  ctx1.fillStyle = grd; 
  ctx1.fillRect(0,0,canvas1.width,canvas1.height);
  console.log(grd);
}


function onClickPickColor(event){
  var style = window.getComputedStyle(canvas1);
  console.log(style);
  var rect = canvas1.getBoundingClientRect();
  var pos2 =  {
    x: event.clientX - rect.left - parseInt(style.borderLeftWidth),
    y: event.clientY - rect.top - parseInt(style.borderTopWidth),
  };
  

  var palette=ctx1.getImageData(pos2.x,pos2.y,1,1)

  console.log(palette)
  var color2={
    r:palette.data[0],
    g:palette.data[1],
    b:palette.data[2]
    
  }
  console.log(pos2);
  color='rgb(' + color2.r + ',' + color2.g + ',' + color2.b + ')';
  console.log(color);
  canvas1.classList.add("hide")
}




  btnGrad.addEventListener("click",function(event){
    canvas1.classList.toggle("hide")
    addLinearGradient()
  })     

canvas1.addEventListener("click",onClickPickColor)     

let count=0
let test=document.getElementById("myBtn")
let test1=document.getElementById("myDiv")
test.addEventListener("click",function(){
  count++
  test1.innerHTML="<p>"+count+"</p>"
})
console.log(test);