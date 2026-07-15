const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surpriseBtn");
const closePopup = document.getElementById("closePopup");
const newMsgBtn = document.getElementById("newMsgBtn");
const mainMessage = document.getElementById("mainMessage");
const card = document.getElementById("birthdayCard");


const messages = [
  "You are my favorite person, and today is all about you 💕",
  "May your smile stay bright and your dreams come true ✨",
  "You deserve cake, love, laughter, and endless happiness 🎂"
];

let msgIndex = 0;

surpriseBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

newMsgBtn.addEventListener("click", () => {
  mainMessage.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

card.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / card.offsetWidth - 0.5) * 12;
  const y = (e.offsetY / card.offsetHeight - 0.5) * 12;
  card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) translateY(-6px)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
});


const balloonBtn = document.getElementById("balloonBtn");
const balloonModal = document.getElementById("balloonModal");
const closeBalloon = document.getElementById("closeBalloon");
const balloonMessage = document.getElementById("balloonMessage");
const balloons = document.querySelectorAll(".balloon");

balloonBtn.addEventListener("click", () => {
  balloonModal.style.display = "flex";
});

closeBalloon.addEventListener("click", () => {
  balloonModal.style.display = "none";
  balloons.forEach(balloon => {
    balloon.classList.remove("popped");
  });
  balloonMessage.textContent = "Click a balloon to see a message.";
});

balloons.forEach(balloon => {
  balloon.addEventListener("click", () => {
    const msg = balloon.getAttribute("data-msg");
    balloon.classList.add("popped");
    balloonMessage.textContent = msg;
  });
});
