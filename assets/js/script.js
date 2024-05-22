const envelope = document.querySelector('.envelope-wrapper');
const link = document.getElementById('link');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
});

link.addEventListener('click', (event) => {
  event.stopPropagation();
});