const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* cards */
// Aula 17 - Navegação por tabs

//------------------------------------------------------------------------------


function typewriterEffect(element, delay = 2) {
  let split_element = element.innerHTML.split("");
  element.innerHTML = "";
  setTimeout(() => {
    split_element.forEach((value, index) => {
      setTimeout(() => {
        element.innerHTML += value;
      }, 65 * index);
    });
  }, delay);
}

typewriterEffect(document.querySelector("h1"));
typewriterEffect(document.querySelector("h1"), 900);

// nessa linha chamamos o id que foi definido na tag <strong> no doc html
const textDisplay = document.getElementById("efeito");
// nessa linha são definidas as tres frases que serão animadas
const phrases = [
  "Desenvolvedor WEB",
  "Desenvolvedor Front-End",
  "Desenvolvedor Front-End & Freelancer",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
