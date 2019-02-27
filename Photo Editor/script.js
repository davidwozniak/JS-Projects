var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var mouse = {x:0,y:0};
var colorPick;
var imageData = {
  imgData :0,
  imgRaw :0,
  imageX :0,
  imageY :0
}
// var upload = document.getElementById("upload").onchange = getPixels(new Image());


canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);
canvas.addEventListener('mousemove',draw);


var img = new Image();
var c = document.getElementById('upload').onchange = function upload() {
    
    img.onload = function () {
        
        canvas.width = this.width;
        canvas.height = this.height;
        // context = canvas.getContext('2d');
        context.drawImage(this, 0,0);
    
        var iD = context.getImageData(img.x, img.y, img.width, img.height);
        var dA = iD.data; // raw pixel data in array
        console.log(dA);

        imageData.imgData = iD;
        imageData.imgRaw = dA;
        imageData.imageX = img.x;
        imageData.imageY = img.y;
        
    };
    img.src = URL.createObjectURL(this.files[0]);
   
  };


function filterImage(filter,image) {
  var args = [this.getPixels(image)];
  for (var i=2; i<arguments.length; i++) {
    args.push(arguments[i]);
  }
  return filter.apply(null, args);
} 

function brightness(pixels, adjustment) {
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    d[i] += adjustment;
    d[i+1] += adjustment;
    d[i+2] += adjustment;
  }
  return pixels;
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

  function brightness (multiplayer) {
    
    var brightnessMul=multiplayer; // brightness multiplier
    //var brightnessOffset = 30; // brightness offset
    var imgDat = imageData.imgData;
    var rawDat = imageData.imgRaw;
    var imgX = imageData.imageX;
    var imgY = imageData.imageY;
    


    for(var i = 0; i < rawDat.length; i += 4)
        {
            
    
            var red = rawDat[i]; // Extract original red color [0 to 255]. Similarly for green and blue below
            var green = rawDat[i + 1];
            var blue = rawDat[i + 2];
            
            brightenedRed = brightnessMul * red;
            brightenedGreen = brightnessMul * green;
            brightenedBlue = brightnessMul * blue;
            
            /*brightenedRed = brightnessOffset + red;
            brightenedGreen = brightnessOffset + green;
            brightenedBlue = brightnessOffset + blue;*/
            
            /**
             *
             * Remember, you should make sure the values brightenedRed,
             * brightenedGreen, and brightenedBlue are between
             * 0 and 255. You can do this by using
             * Math.max(0, Math.min(255, brightenedRed))
             * 
             */
            
            
            rawDat[i] = brightenedRed;
            rawDat[i + 1] = brightenedGreen;
            rawDat[i + 2] = brightenedBlue;
        }

        var ctx = canvas.getContext('2d')
        ctx.putImageData(imgDat, imgX, imgY);

      
        

}





  var lastvalue = 0;


// var slider = document.getElementById("myRange").value="75";
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
function updateTextInput(val) {
    document.getElementById('myRange').value= val; 
    var currenntVal;
    if (val>lastvalue) {
        currenntVal = val/70 + 1;
        brightness(currenntVal);
    } else if (val<lastvalue) {
        currenntVal = val/70;
        brightness(currenntVal);
    } 

    
    lastvalue=val;
  }