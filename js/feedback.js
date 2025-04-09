const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = document.getElementById('feedbackInput').value;
    alert(`Thank you for your feedback: "${feedback}"`);
});
