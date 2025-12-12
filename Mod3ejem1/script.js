const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const modalOverlay = document.getElementById('modalOverlay');
const btnModalAction = document.querySelector('.btn-modal-action');

function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
btnModalAction.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
