var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

var radius = 10;
var winX = Math.random()*(innerWidth-2*radius)+radius;
var winY = Math.random()*(innerHeight/7-2*radius)+radius;
var loseX;
var loseY;
var losePos = [];

randomiseLosePos();

window.addEventListener('deviceorientation', function (ev) {
        
        var x=  ev.gamma*4 +innerWidth/2;
        var y = ev.beta*8 +innerHeight/2;

        c.clearRect(0,0,innerWidth, innerHeight);

        drawCircles(x,y);
        checkWin(x,y);
})















///////////////FUNCTIONS///////////////////


function randomiseLosePos () {
        for (var i =0; i < 10; i++) 
        {
        loseX = (Math.random()*(winX+innerWidth/4));
        loseY = Math.random()*(winY+innerHeight/4)+50;
        losePos.push(loseX,loseY); 
        loseX+=5;
        loseY+=5;      
        }
}

function checkWin (x,y) {
        for (var i =0; i<20;i+=2) 
        {
                if (x > winX-10 && x <winX+10 && y >winY-10 && y<winY+10){
                        alert('You did it!');
                        location.reload(true);
                        break;
                }else if (x > losePos[i]-15 && x <losePos[i]+15 && y >losePos[i+1]-15 && y<losePos[i+1]+15){
                        alert('Im sorry');
                        location.reload(true);
                }
        
        }

}


function drawCircles (x,y) {
       
        //win circle
        c.beginPath();
        c.arc(winX,winY,radius,0, Math.PI *2,false);
        c.strokeStyle = 'blue';
        c.stroke();
        
        //lose circle
        for(var i=0;i<20;i+=2)
        {
        
        c.beginPath();
        c.arc(losePos[i],losePos[i+1],radius,0, Math.PI *2,false);
        c.strokeStyle = 'red';
        c.stroke();
        
        }
        
       
        //main circle
        c.beginPath();
        c.arc(x,y,radius,0, Math.PI *2,false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fill();
        
}


