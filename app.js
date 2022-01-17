const typed = document.querySelector('.typed');
const cursor = document.querySelector('.cursor');
const texts = ['Website', 'Blog', 'Next Big Idea'];
const typeDelay = 200;
const eraseDelay = 100;
const newTextDelay = 2000;
let textIndex = 0;
let charIndex = 0;

function type(){
    if (charIndex < texts[textIndex].length){
        if(!cursor.classList.contains('typing')){
            cursor.classList.add('typing');
        }
        typed.textContent += texts[textIndex].charAt(charIndex);
        charIndex += 1;
        setTimeout(type, typeDelay);
    } else{
        cursor.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if (charIndex > 0){
        if(!cursor.classList.contains('typing')){
            cursor.classList.add('typing');
        }
        typed.textContent = texts[textIndex].substring(0, charIndex-1);
        charIndex -= 1;
        setTimeout(erase, eraseDelay);
    }else{
        textIndex++;
        cursor.classList.remove('typing');
        if(textIndex === texts.length){
            textIndex = 0;
        }
        setTimeout(type, newTextDelay/2);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, newTextDelay);
});
