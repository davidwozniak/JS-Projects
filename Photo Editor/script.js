//variables
var canvas = document.getElementById('editor');
var context = canvas.getContext('2d');

var imageLoader = document.getElementById('upload');
imageLoader.addEventListener('change', handleImage, false);

var mouse = {x:0,y:0};
var colorPick;

var brightChange = document.getElementById('brightness');
var contrChange = document.getElementById('contrast');
var saturChange = document.getElementById('saturation');
var contrastChange = document.getElementById('contrast');

//event listeners
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);
canvas.addEventListener('mousemove',draw);
brightChange.addEventListener('mousedown', changeBrightness);
saturChange.addEventListener('mousedown', changeSaturation);
contrChange.addEventListener('mousedown', changeContrast);


//functions
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



function changeBrightness() {
  $("#brightness").mousemove(function () {

    var amount = $("#brightness").val()/50;
  
    var img = document.getElementById('editor');

    img.setAttribute('style', 'filter:brightness(' + amount + '); -webkit-filter:brightness(' + amount + '); -moz-filter:brightness(' + amount + ')');
  })
};


function changeContrast() {
  $("#contrast").mousemove(function () {

    var amount = $("#contrast").val()/50;

    var img = document.getElementById('editor');
  
    img.setAttribute('style', 'filter:contrast(' + amount + '); -webkit-filter:contrast(' + amount + '); -moz-filter:contrast(' + amount + ')');
  })
};


 
function changeSaturation() {
    $("#saturation").mousemove(function () {

      var amount = $("#saturation").val()/50;

      var img = document.getElementById('editor');
    
      img.setAttribute('style', 'filter:saturate(' + amount + '); -webkit-filter:saturate(' + amount + '); -moz-filter:saturate(' + amount + ')');
    })
 };
 


function color (e) {
  colorPick = e;
  return colorPick;  
}


function setPosition(e) {

  mouse.x = e.layerX;
  mouse.y = e.layerY; 
};

function draw(e){
    if (e.buttons !== 1) return; 

    context.beginPath(); 
  
    context.lineWidth = 2; 
    context.lineCap = "round"; 
    context.strokeStyle = colorPick; 
  
    context.moveTo(mouse.x, mouse.y); 
    setPosition(e);
    context.lineTo(mouse.x, mouse.y); 
  
    context.stroke(); 
  };

