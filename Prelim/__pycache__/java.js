const authModal = document.getElementById('authModal');
const showAuth = document.getElementById('showAuth');
const closeAuth = document.getElementById('closeAuth');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Show modal
showAuth.addEventListener('click', () => {
  authModal.style.display = 'flex';
});

// Close modal
closeAuth.addEventListener('click', () => {
  authModal.style.display = 'none';
});

// Click outside modal closes
window.addEventListener('click', (e) => {
  if (e.target === authModal) authModal.style.display = 'none';
});

// Tab switching
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.tab;
    tabPanels.forEach(panel => {
      panel.id === target ? panel.classList.add('active') : panel.classList.remove('active');
    });
  });
});

// Set default tab
document.getElementById('signin').classList.add('active');