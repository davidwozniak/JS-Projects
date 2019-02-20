var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');




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


