document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');

    // Check if the dark mode preference exists in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        // Apply dark mode by adding the class to the body
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Add event listener for the dark mode toggle
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            // Activate dark mode
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
        } else {
            // Deactivate dark mode
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
        }
    });
});
