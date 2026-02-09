const unopenedEnvelope = document.getElementById('unopened-envelope');

const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const questionGif = document.getElementById('please-hamster');

const originalGifSrc = 'images/please_hamster.gif';

let messages = ["Are you sure?", "Really sure?", "Are you positive?", "Pookie please...", "Don't make me sad...", "I will be very sad...", "Pretty please?"]
let messageIndex = 0;

function openEnvelope() {
    document.querySelector('.envelope').disabled = true;

    unopenedEnvelope.src = 'images/opened_envelope.png';

    setTimeout(() => {window.location.href = 'question.html';}, 1000);
}

function handleYesClick() {
    window.location.href = 'yes.html';
}

function handleNoClick() {
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize *1.5) + 'px';
}

noButton.addEventListener("mouseover", () => {
    questionGif.src = 'images/mad_hamster.gif';
    questionGif.alt = 'Mad Hamster GIF';
});

noButton.addEventListener("mouseout", () => {
    questionGif.src = originalGifSrc;
    questionGif.alt = 'Please Hamster GIF';
});

yesButton.addEventListener("mouseover", () => {
    questionGif.src = 'images/excited_hamster.gif';
    questionGif.alt = 'Excited Hamster GIF';
});

yesButton.addEventListener("mouseout", () => {
    questionGif.src = originalGifSrc;
    questionGif.alt = 'Please Hamster GIF';
});
