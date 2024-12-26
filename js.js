        const button = document.getElementById('animate-button');
const hiddenContent = document.getElementById('hidden-content');

button.addEventListener('click', () => {
    button.style.display = 'none';
    hiddenContent.classList.remove('hidden');
    hiddenContent.style.opacity = '1';
});