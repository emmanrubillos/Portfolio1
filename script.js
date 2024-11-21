// Typewriter Effect
const text = [
    "DEVELOPER",
    "VIDEO EDITOR",
    "YOUTUBER"
]

let speed = 100;

const textELements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < text[textIndex].length){
        textELements.innerHTML += text[textIndex].charAt(characterIndex)
        characterIndex++;
        setTimeout(typeWriter,speed)
    }
    else{
        setTimeout(eraseText,1000)
    }
}

function eraseText(){
    if(textELements.innerHTML.length > 0){
        textELements.innerHTML = textELements.innerHTML.slice(0,-1)
        setTimeout(eraseText,50)
    }
    else{
        textIndex = (textIndex + 1) % text.length;
        characterIndex = 0;
        setTimeout(typeWriter,500);
    }
}

window.onload = typeWriter

// End of TypeWriter Script

