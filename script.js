const unopenedEnvelope = document.getElementById('unopened-envelope');

const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const questionGif = document.getElementById('please-hamster');

const originalGifSrc = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa25xbm1hZjNwaXhoOGVvMTh4bHp6OW00aWpiaHVpdXV2aHJ4czEzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QyyK3h1DMaZOuJbYWo/giphy.gif';

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
    questionGif.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3U4eWJpZHh0Y2VpdzU3aTFmaWNldzljc3phZzI1bDFsZ3NrcDRzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gUNUi05afFLWm1hYcs/giphy.gif';
    questionGif.alt = 'Mad Hamster GIF';
});

noButton.addEventListener("mouseout", () => {
    questionGif.src = originalGifSrc;
    questionGif.alt = 'Please Hamster GIF';
});

yesButton.addEventListener("mouseover", () => {
    questionGif.src = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnRzMTR3dHZ1b3E4MXJienI2dzd0bHMxOHh3eDJ5eTdoNG1wbWdnMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MguQrhEC4v6B1viXk1/giphy.gif';
    questionGif.alt = 'Excited Hamster GIF';
});

yesButton.addEventListener("mouseout", () => {
    questionGif.src = originalGifSrc;
    questionGif.alt = 'Please Hamster GIF';
});
