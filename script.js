document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const musicToggle = document.getElementById('music-toggle');
    const musicSelect = document.getElementById('music-select');
    const audioElement = document.getElementById('background-audio');
    const audioSource = document.getElementById('audio-source');

    // Dark mode toggle
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Music toggle
    musicToggle.addEventListener('change', function () {
        if (musicToggle.checked) {
            let selectedMusic = musicSelect.value;
            switch (selectedMusic) {
                case 'music1':
                    audioSource.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
                    break;
                case 'music2':
                    audioSource.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
                    break;
            }
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    });

    // Change music based on selection
    musicSelect.addEventListener('change', function () {
        if (musicToggle.checked) {
            let selectedMusic = musicSelect.value;
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
});
