function openEnvelope() {
    document.querySelector('.envelope').disabled = true;

    const unopenedEnvelope = document.getElementById('unopened-envelope');
    unopenedEnvelope.src = 'images/opened_envelope.png';

    setTimeout(() => {window.location.href = 'question.html';}, 1000);
}