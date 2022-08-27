let character = document.getElementById("character")
let block = document.getElementById("block")
let score = document.getElementById("score")
let floatingBlock = document.getElementById("floatingBlock")
var scoreInt = 0;

function jump(){
    if(character.classList != "animateJump"){
        character.classList.add("animateJump");
    }
    setTimeout(function(){
        character.classList.remove("animateJump")
    },500);
}

function duck(){
    character.style.height = "25px";
    character.style.top = "175px";
    floatingBlock.style.top = "110px";
    block.style.top = "140px";

    setTimeout(function(){
        character.style.height = "50px";
        character.style.top = "150px";
        floatingBlock.style.top = "85px";
        block.style.top = "115px";
    },500);
}

document.addEventListener('keydown', (event) => {
    var name = event.key;

    if(name == 'ArrowUp'){
        jump();
    }
    if(name == 'ArrowDown'){
        duck();
    }
  }, false);

function blockAnimate(){
    if(block.classList != "blockAnimate"){
        block.classList.add("blockAnimate");
        block.style.display = "block"
    }
    setTimeout(function(){
        block.classList.remove("blockAnimate")
        block.style.display = "none"
    },1000);
}

function floatingBlockAnimate(){
    if(floatingBlock.classList != "floatingBlockAnimate"){
        floatingBlock.classList.add("floatingBlockAnimate");
        floatingBlock.style.display = "block"
    }
    setTimeout(function(){
        floatingBlock.classList.remove("floatingBlockAnimate")
        floatingBlock.style.display = "none"
    },1000);
}

let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let floatingBlockLeft = parseInt(window.getComputedStyle(floatingBlock).getPropertyValue("left"));

    if(blockLeft<40 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Lose Your Final Score is: " + scoreInt);
        playAgain();
    }
    if(floatingBlockLeft<40 && floatingBlockLeft>0 && characterTop<=150){
        floatingBlock.style.animation = "none";
        floatingBlock.style.display = "none";
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

function randomizeBock() {}

(function loop() {
    var rand = Math.round(Math.random() * (4000 - 100)) + 1000;
    setTimeout(function() {
        
        let randBlock = Math.floor(Math.random() * 2) + 1;

        if (randBlock == 1){
            blockAnimate();
            randomizeBock();
            loop(); 
        }
        else{
            floatingBlockAnimate();
            randomizeBock();
            loop(); 
        }

    }, rand);
}());