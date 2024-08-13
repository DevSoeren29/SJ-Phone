// Select elements
const powerButton = document.getElementById('power-button');
const volumeUpButton = document.getElementById('volume-up');
const volumeDownButton = document.getElementById('volume-down');
const phoneScreen = document.getElementById('phone-screen');
const volumeIndicator = document.getElementById('volume-indicator');

let screenOn = true; // Screen is on by default
let volumeLevel = 50; // Default volume level

// Power button toggles the screen on and off
powerButton.addEventListener('click', () => {
    screenOn = !screenOn;
    phoneScreen.style.display = screenOn ? 'block' : 'none';
});

// Volume up button increases the volume
volumeUpButton.addEventListener('click', () => {
    if (volumeLevel < 100) {
        volumeLevel += 10;
        updateVolumeIndicator();
    }
});

// Volume down button decreases the volume
volumeDownButton.addEventListener('click', () => {
    if (volumeLevel > 0) {
        volumeLevel -= 10;
        updateVolumeIndicator();
    }
});

// Function to update the volume indicator
function updateVolumeIndicator() {
    volumeIndicator.textContent = `Volume: ${volumeLevel}%`;
    volumeIndicator.style.display = 'block';
    setTimeout(() => {
        volumeIndicator.style.display = 'none';
    }, 1000);
}

// Double-tap on the screen to unlock (if it's off)
phoneScreen.addEventListener('dblclick', () => {
    if (!screenOn) {
        screenOn = true;
        phoneScreen.style.display = 'block';
    }
});
