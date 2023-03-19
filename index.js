const dino =document.getElementById('square');
const cactus=document.getElementById('square2');
const score=document.getElementById('score');
const sound=new Audio();
sound.src="music.mp3";

function jump() {
if (dino.classList !="jump"){
  dino.classList.add("jump");
  setTimeout(function (){
      dino.classList.remove("jump");
  },300);
}
}
let isAlive = setInterval(function (){
  score.innerText++;
    let dinoTop=parseInt( window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

 if (cactusLeft >200 && cactusLeft <310 && dinoTop >=490 ){
      
  alert("your score is: "  +  score.innerText + 
  "\n\nPress Ok To Start Again   :)" ); 
  location.reload();
 }
},10);

document.addEventListener("keydown", function (event) {
  sound.play();
    jump();
});
