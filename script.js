document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const backgroundToggle = document.getElementById('background-toggle');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundOptions = document.getElementById('background-options');
    const musicOptions = document.getElementById('music-options');
    const backgroundSelect = document.getElementById('background-select');
    const musicSelect = document.getElementById('music-select');
    const audioElement = document.getElementById('background-audio');
    const audioSource = document.getElementById('audio-source');

    // Handle background image toggle
    backgroundToggle.addEventListener('change', function () {
        if (backgroundToggle.checked) {
            backgroundOptions.style.display = 'block'; // Show the image selector
            document.body.style.backgroundImage = `url('assets/${backgroundSelect.value}.jpg')`;
        } else {
            backgroundOptions.style.display = 'none'; // Hide the image selector
            document.body.style.backgroundImage = 'none';
        }
    });

    // Handle background image selection
    backgroundSelect.addEventListener('change', function () {
        if (backgroundToggle.checked) {
            document.body.style.backgroundImage = `url('assets/${backgroundSelect.value}.jpg')`;
        }
    });

    // Handle music toggle
    musicToggle.addEventListener('change', function () {
        if (musicToggle.checked) {
            musicOptions.style.display = 'block'; // Show music selector
            audioElement.play();
        } else {
            musicOptions.style.display = 'none'; // Hide music selector
            audioElement.pause();
            audioElement.currentTime = 0; // Reset music to the start
        }
    });

    // Handle music selection
    musicSelect.addEventListener('change', function () {
        const musicChoice = musicSelect.value;
        switch (musicChoice) {
            case 'music1':
                audioSource.src = 'assets/music1.mp3';
                break;
            case 'music2':
                audioSource.src = 'assets/music2.mp3';
                break;
            case 'music3':
                audioSource.src = 'assets/music3.mp3';
                break;
            default:
                audioSource.src = '';
        }

        if (musicToggle.checked) {
            audioElement.play(); // Play the new music
        }
    });
});

