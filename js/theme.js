const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.body.style.transition = 'background-color 0.3s ease';
