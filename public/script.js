

const socket = io();
function sendMessage(message) {
    console.log(message)
    socket.emit('buttonClicked', message);
    console.log(12)
}

socket.on('playVoice', (message) => {
    console.log(message)
    let speech = new SpeechSynthesisUtterance(message);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
});
