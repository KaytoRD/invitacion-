document.getElementById("yes").addEventListener("click", function() {
    startTypingEffect();
});

// Animación de tipeo en el mensaje especial
function startTypingEffect() {
    let message = "¡el viernes nos espera una bonita salida. 🌷💫! ❤️";
    let typingText = document.getElementById("typing-text");
    let messageContainer = document.getElementById("message");

    typingText.innerHTML = "";
    messageContainer.style.visibility = "visible";

    let index = 0;
    let interval = setInterval(() => {
        if (index < message.length) {
            typingText.innerHTML += message[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Crear corazones en el fondo
setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 3) + "s";
    document.getElementById("heart-bg").appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}, 500);

document.getElementById("yes").addEventListener("click", function() {
    startTypingEffect();
    createHeartExplosion();
});

function createHeartExplosion() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart-confetti");
        heart.innerHTML = "❤️";
        heart.style.left = (50 + Math.random() * 20 - 10) + "%";
        heart.style.top = (50 + Math.random() * 20 - 10) + "%";
        document.body.appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 1000);
    }
}
