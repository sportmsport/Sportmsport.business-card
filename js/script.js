document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    // Function to hide welcome screen and show main content
    const enterSite = () => {
        // Fade out welcome screen
        welcomeScreen.classList.add('hidden');
        
        // After fade out transition, reveal main content
        setTimeout(() => {
            // Show main content
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');
        }, 800); // Matches transition duration in CSS (0.8s)
    };

    // Automatically enter site after 3 seconds
    setTimeout(enterSite, 3000);
});
