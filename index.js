var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var audio;

for(let i=0; i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        checkClick(buttonInnerHTML);
        buttonAnnimation(buttonInnerHTML);
    });
    document.addEventListener("keydown",function(event){
        checkKeyboard(event.key);
    });
    
    
}
function checkClick(key){
    switch(key){
        case 'w': audio = new Audio("sounds/tom-1.mp3"); audio.play(); break;
        case 'a': audio = new Audio("sounds/tom-2.mp3"); audio.play(); break;
        case 's': audio = new Audio("sounds/tom-3.mp3"); audio.play(); break;
        case 'd': audio = new Audio("sounds/tom-4.mp3"); audio.play(); break;
        case 'j': audio = new Audio("sounds/crash.mp3"); audio.play(); break;
        case 'k': audio = new Audio("sounds/kick-bass.mp3"); audio.play(); break;
        case 'l': audio = new Audio("sounds/snare.mp3") ; audio.play(); break;
        default: console.log("wrong key");
    }
}

function checkKeyboard(key){
    buttonAnnimation(key);
    switch(key){
        case 'w': audio = new Audio("sounds/tom-1.mp3"); audio.play(); break;
        case 'a': audio = new Audio("sounds/tom-2.mp3"); audio.play(); break;
        case 's': audio = new Audio("sounds/tom-3.mp3"); audio.play(); break;
        case 'd': audio = new Audio("sounds/tom-4.mp3"); audio.play(); break;
        case 'j': audio = new Audio("sounds/crash.mp3"); audio.play(); break;
        case 'k': audio = new Audio("sounds/kick-bass.mp3"); audio.play(); break;
        case 'l': audio = new Audio("sounds/snare.mp3") ; audio.play(); break;
    }
}

function buttonAnnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},250);
}
