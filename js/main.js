// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    saveThemePreference();
});

// Function to save the user's theme preference in local storage
function saveThemePreference() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkModeEnabled', isDarkMode);
}

// Function to load the user's theme preference on page load
function loadThemePreference() {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
}
loadThemePreference(); // Execute on page load

// Search bar functionality
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query) {
        // Mock search functionality
        alert(`Searching for "${query}"... Feature coming soon!`);
    } else {
        alert('Please enter a search term.');
    }
});

// Analytics tracking for user interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Analytics loaded.');

    // Track navigation clicks
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            console.log(`User clicked on ${link.textContent}`);
        });
    });

    // Track dark mode toggle
    themeToggle.addEventListener('click', () => {
        console.log('Dark mode toggled');
    });

    // Track search submissions
    searchForm.addEventListener('submit', () => {
        console.log('Search performed');
    });
});
