let character = document.getElementById("character")
let block = document.getElementById("block")
let score = document.getElementById("score")
var scoreInt = 0;

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500);
}

let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lose Your Final Score is: " + scoreInt);
        playAgain();
    }

},10);

let checkScore = setInterval(function(){
    score.textContent = "Score: " + scoreInt;
    scoreInt++;
},100);

function playAgain(){
    if (confirm("Play Again?") == true){
        document.location.reload();
    }
    else{
        clearInterval(checkScore);
        return;
    }
}