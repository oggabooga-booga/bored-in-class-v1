document.addEventListener('DOMContentLoaded', function () {
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
            document.body.classList.add(backgroundSelect.value); // Add selected background class
        } else {
            backgroundOptions.style.display = 'none'; // Hide the image selector
            document.body.classList.remove('background1', 'background2'); // Remove any background class
        }
    });

    // Handle background image selection
    backgroundSelect.addEventListener('change', function () {
        if (backgroundToggle.checked) {
            document.body.classList.remove('background1', 'background2'); // Remove current background class
            document.body.classList.add(backgroundSelect.value); // Apply new background
        }
    });

    // Handle music toggle
    musicToggle.addEventListener('change', function () {
        if (musicToggle.checked) {
            musicOptions.style.display = 'block'; // Show music selector
            audioElement.play(); // Start music
        } else {
            musicOptions.style.display = 'none'; // Hide music selector
            audioElement.pause(); // Stop music
            audioElement.currentTime = 0; // Reset music to start
        }
    });

    // Handle music selection
    musicSelect.addEventListener('change', function () {
        const musicChoice = musicSelect.value;
        switch (musicChoice) {
            case 'music1':
                audioSource.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
                break;
            case 'music2':
                audioSource.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
                break;
            default:
                audioSource.src = '';
        }

        if (musicToggle.checked) {
            audioElement.play(); // Play the selected music
        }
    });
});
