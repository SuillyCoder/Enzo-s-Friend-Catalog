document.addEventListener('DOMContentLoaded', function () {
    // Check if the flag is set
    const hasResetFlag = localStorage.getItem('audioResetFlag');

    // If the flag is not set, reset the saved time to zero
    if (!hasResetFlag) {
        localStorage.setItem('audioTime', '0');
        // Set the flag to indicate that the reset has occurred
        localStorage.setItem('audioResetFlag', 'true');
    }

    // Play the theme song
    playTheThemeSong();
});

function playTheThemeSong() {
    // Your existing code to set the saved time and play the audio
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime) {
        document.getElementById("theme").currentTime = parseFloat(savedTime);
    }

    document.getElementById("theme").addEventListener('timeupdate', function () {
        localStorage.setItem('audioTime', this.currentTime.toString());
    });

    document.getElementById("theme").play();
}