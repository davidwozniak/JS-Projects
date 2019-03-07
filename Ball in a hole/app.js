var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');
var accel = {
        dx : 1,
        dy : 1
}
var r = 10;
var a = Math.random()*(innerWidth-2*r)+r;
var b = Math.random()*(innerHeight/4-2*r)+r;

window.addEventListener('deviceorientation', function (ev) {
       
        
       
        var y = ev.beta*8 +innerHeight/2;
      
        var x=  ev.gamma*4 +innerWidth/2;
        
        
        radius = 10;

        c.clearRect(0,0,innerWidth, innerHeight);
        
        c.beginPath();
        c.arc(a,b,r,0, Math.PI *2,false);
        c.strokeStyle = 'blue';
        c.stroke();
        

        c.beginPath();
        c.arc(x,y,radius,0, Math.PI *2,false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fill();
        

        if (x > a-2 && x <a+2 && y >b-2 && y<b+2){
                alert('juras grubas');
                location.reload(true);
        }
})






