function navigate(page) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

function makePurchase(choice) {
  if (choice) {
    navigate('thankyou');
  } else {
    document.getElementById("exit-popup").style.display = "flex";
  }
}

function closePopup() {
  document.getElementById("exit-popup").style.display = "none";
}

/* ===== Matrix Rain Animation ===== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Fullscreen canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヰヱヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const matrix = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Initial drops
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 35);

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});


function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

// Typing effect untuk di halaman Home
const typingText = document.getElementById("typing-text");
const messages = [
  "Web Developer 💻",
  "Tech Enthusiast ⚡",
  // "Suporter Bola 🎉",
  "Always Learning 📚"
];
let msgIndex = 0;
let charIndex = 0;
let typingSpeed = 100;

function typeEffect() {
  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = messages[msgIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

// Mulai typing effect ketika halaman load
document.addEventListener("DOMContentLoaded", typeEffect);


// script.js

document.addEventListener("DOMContentLoaded", function () {
  const text = "Contact Me";
  let i = 0;
  const speed = 150;
  const typingTarget = document.getElementById("typing-text-contact");

  function typeWriter() {
    if (i < text.length) {
      typingTarget.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
