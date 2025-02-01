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
            // Default to background 1 if it's toggled on
            document.body.classList.add(backgroundSelect.value); 
        } else {
            backgroundOptions.style.display = 'none'; // Hide the image selector
            document.body.classList.remove('background1', 'background2'); // Remove any background class
            document.body.style.backgroundColor = '#5A2D87'; // Keep purple background if no image is selected
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
                audioSource.src = 'https://pixabay.com/music/main-title-epic-cinematic-music-293619/';
                break;
            case 'music2':
                audioSource.src = 'https://pixabay.com/music/main-title-epic-hollywood-trailer-9489/';
                break;
            default:
                audioSource.src = '';
        }

        if (musicToggle.checked) {
            audioElement.play(); // Play the selected music
        }
    });
});
