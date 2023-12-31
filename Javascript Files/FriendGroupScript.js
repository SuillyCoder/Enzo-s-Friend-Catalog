document.addEventListener('DOMContentLoaded', function () {
    playTheThemeSong();
});

function playTheThemeSong() {
    // Check if there's a saved time and set it
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime) {
        document.getElementById("theme").currentTime = parseFloat(savedTime);
    }

    // Save the current time of the audio player in localStorage
    document.getElementById("theme").addEventListener('timeupdate', function () {
        localStorage.setItem('audioTime', this.currentTime.toString());
    });

    // Play the theme song
    document.getElementById("theme").play();
}
