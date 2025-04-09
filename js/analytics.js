// Analytics tracking
document.addEventListener('DOMContentLoaded', () => {
    console.log('Analytics loaded.');

    // Track navigation clicks
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            console.log(`User clicked on ${link.textContent}`);
        });
    });
});
