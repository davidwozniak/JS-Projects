var canvas = document.getElementById('editor');
var context = canvas.getContext('2d');

var imageLoader = document.getElementById('upload');
imageLoader.addEventListener('change', handleImage, false);

var mouse = {x:0,y:0};
var colorPick;


function handleImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
      var img = new Image();
      img.onload = function(){
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img,0,0);
      }
      img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);     
}


canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);
canvas.addEventListener('mousemove',draw);






$("#rangevalue").mousemove(function () {


  console.log($("#rangevalue").val())
  var amount = $("#rangevalue").val()/50;

  var img = document.getElementById('editor');

  /* We change the brightness of the canvas itself */
  img.setAttribute('style', 'filter:brightness(' + amount + '); -webkit-filter:brightness(' + amount + '); -moz-filter:brightness(' + amount + ')');



})


function color (e) {
  colorPick = e;
  return colorPick;  
}


function setPosition(e) {

  mouse.x = e.layerX;
  mouse.y = e.layerY; 
};

function draw(e){
    if (e.buttons !== 1) return; // if mouse is pressed.....
  
    
  
    context.beginPath(); // begin the drawing path
  
    context.lineWidth = 2; // width of line
    context.lineCap = "round"; // rounded end cap
    context.strokeStyle = colorPick; // hex color of line
  
    context.moveTo(mouse.x, mouse.y); // from position
    setPosition(e);
    context.lineTo(mouse.x, mouse.y); // to position
  
    context.stroke(); // draw it!
  };

