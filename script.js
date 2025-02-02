document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const musicToggle = document.getElementById('music-toggle');
    const musicSelect = document.getElementById('music-select');
    const audioElement = document.getElementById('background-audio');
    const audioSource = document.getElementById('audio-source');

    // Check saved theme and music settings from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
    
    if (localStorage.getItem('musicEnabled') === 'enabled') {
        musicToggle.checked = true;
        let selectedMusic = localStorage.getItem('selectedMusic') || 'music1';
        musicSelect.value = selectedMusic;
        updateMusic(selectedMusic);
    }

    // Dark Mode Toggle
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Music Toggle
    musicToggle.addEventListener('change', function () {
        if (musicToggle.checked) {
            localStorage.setItem('musicEnabled', 'enabled');
            updateMusic(musicSelect.value); // Play selected music
        } else {
            localStorage.setItem('musicEnabled', 'disabled');
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    });

    // Change the background music
    musicSelect.addEventListener('change', function () {
        let selectedMusic = musicSelect.value;
        localStorage.setItem('selectedMusic', selectedMusic);
        if (musicToggle.checked) {
            updateMusic(selectedMusic);
        }
    });

    function updateMusic(selectedMusic) {
        switch (selectedMusic) {
            case 'music1':
                audioSource.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
                break;
            case 'music2':
                audioSource.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
                break;
        }
        audioElement.play();
    }
});
