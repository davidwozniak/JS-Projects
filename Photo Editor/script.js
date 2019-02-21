
var ctx = document.getElementById('upload').onchange = function(e) {
  var img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
};


function draw() {
  var canvas = document.getElementById('editor');
  canvas.width = this.width;
  canvas.height = this.height;
  ctx = canvas.getContext('2d');
  ctx.drawImage(this, 0,0);
}

function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}



ctx.addEventListener('mousedown', onDown, false);

function onDown(event){
    cx = event.
    cy = event.pageY;
    console.log(cx+","+cy);
}

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


