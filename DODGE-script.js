function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if (left>=0){
        character.style.left = left + "px";
    }
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left<300) {
        character.style.left = left + "px";
    }
}
document.addEventListener("keydown", event => {
    if (event.key==="ArrowLeft" || event.key==="a") {moveLeft();}
    if (event.key==="ArrowRight" || event.key==="d") {moveRight();}
});
document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);

var block = document.getElementById("block");
var counter = 0;
block.addEventListener("animationiteration",() => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter += 1;
    score = document.getElementById("score");
    score.innerHTML = counter;
    if (counter===100){
        score.style.width = 75 + 25*1;
    }
    if (counter===1000){
        score.style.width = 75 + 25*2;
    }
    if (counter===10000){
        score.style.width = 75 + 25*3;
    }
});

setInterval(function() {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if (characterLeft == blockLeft && blockTop < 500 && blockTop> 300) {
        alert("Game Over. Score: "+counter);
        block.classList.remove("animate");
    }
}, 50);

function restart(){
    setTimeout(function(){
        var block = document.getElementById("block");
        block.style.top = 0;
        block.classList.add("animate");
        counter = 0;
        score = document.getElementById("score");
        score.innerHTML = 0;
        score.style.width = 75;
    }, 1000);
}