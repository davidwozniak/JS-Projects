function playSample (sampleName) {
    var sample = document.getElementById(sampleName);
    sample.play();
}

document.addEventListener('keydown', function (e) {
    
        var samplex = document.getElementById(e.key);
        samplex.click();
})


