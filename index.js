// code for event listerner for screen
var i = 0;
while (i < document.querySelectorAll(".drum").length) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var innerHTMLButton = this.innerHTML;

    actionToListern(innerHTMLButton);
    buttonAnimination(innerHTMLButton);
  });
  i++;
}


//code event listern for keybord action
document.addEventListener("keydown",function(e){
  actionToListern(e.key);
  buttonAnimination(e.key);
});

//function to perform the sound on click an press
function actionToListern(action){
  this.action=action;
  switch (action) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1. play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2. play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3. play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4. play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
    consol.log(innerHTMLButton);

  }

}

// button animination when pressed

function buttonAnimination(activeButton){
  var pressedbutton=document.querySelector("."+activeButton);
  pressedbutton.classList.add("pressed");
  setTimeout(function () {
    pressedbutton.classList.remove("pressed");
  }, 100);
}
