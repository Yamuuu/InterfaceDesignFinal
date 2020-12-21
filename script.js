var audioA;
var audioB;
var audioC;

function player(){
    var element = document.getElementById("mainPlayer").style.display="block";
    var button = document.getElementById("button");
    button.style.visibility = "hidden";
}

function audioStartA(){
    var audioA  = document.getElementById("look");
    audioA.play();
}

function audioStartB(){
    var audioB  = document.getElementById("five");
    audioB.play()
    audioB.currentTime = 14;

}

function audioStartC(){
    var audioC  = document.getElementById("nice");
    audioC.play()
    audioC.currentTime = 3;
}