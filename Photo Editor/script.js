var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var mouse = {x:0,y:0};



var c = document.getElementById('upload').onchange = function(e) {
  var img = new Image();
  img.onload = drw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
};


function drw() {
  var cnv = document.getElementById('editor');
  cnv.width = this.width;
  cnv.height = this.height;
  c = cnv.getContext('2d');
  c.drawImage(this, 0,0);
}

function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}



canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mousemove',draw);



function setPosition(e) {

  mouse.x = e.layerX;
  mouse.y = e.layerY;



  
};

function draw(e){
    if (e.buttons !== 1) return; // if mouse is pressed.....
  
    // var color = document.getElementById("hex").value;
  
    ctx.beginPath(); // begin the drawing path
  
    ctx.lineWidth = 5; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = '#f442d9'; // hex color of line
  
    ctx.moveTo(mouse.x, mouse.y); // from position
    setPosition(e);
    ctx.lineTo(mouse.x, mouse.y); // to position
  
    ctx.stroke(); // draw it!
  };










//#region Slider Value
//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//#endregion


