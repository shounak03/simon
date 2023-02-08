let cc=-1;
let numClick = -1;
let userPattern=[];
let correctPattern=[];
let possibleColors=["red","blue","green","yellow"];
let level = 0;


$(".btn").click(function(buttonClicked){
    numClick++;
    let color = $(this).attr("id");
    clicKAnimation("#" + color);
    playAudio(color);
    checkAnswer(color);

});

function checkAnswer(color){
    userPattern.push(color);
    if(color == correctPattern[numClick]){
        if(userPattern.length == correctPattern.length){
                setTimeout(function(){
                    userPattern = [];
                    numClick=-1;
                    nextSequence();
                },1000);
        }
    }
    else{
        $('.st').text("GAME OVER! PRESS START TO TRY AGAIN");
         numClick = -1;
         userPattern=[];
         correctPattern=[];
    
        level =0;
        
    }
}
function nextSequence(){
    level++;
    $('#lvl').text(level);
    let r = Math.floor(Math.random()*4);
    let color = possibleColors[r];
    correctPattern.push(color);
    playAudio(color);
    clicKAnimation('#' + color);
}

function playAudio(color){
    let relpath = `sounds/${color}.mp3`;
    let audio = new Audio(relpath);
    audio.play();
}

function clicKAnimation(id){
    $(id).fadeOut(100).fadeIn(100);
}

$('.start-btn').click(function(){
    if(level<=0){
        nextSequence();
    }
});

