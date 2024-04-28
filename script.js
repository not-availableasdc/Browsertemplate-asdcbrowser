const addressBar = document.getElementById('addressBar');
const goButton = document.getElementById('goButton');
const browserFrame = document.getElementById('browserFrame');

goButton.addEventListener('click', () => {
    const url = addressBar.value;
    browserFrame.src = url;
});
