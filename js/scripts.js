// Theme toggle
const themeBtn = document.getElementById('toggleTheme');
if (themeBtn) {
  themeBtn.onclick = () => {
    document.body.classList.toggle('light');
  };
}

// Panic button (settings.html)
function setupPanic(panicKey, inputId) {
  const input = document.getElementById(inputId);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value === panicKey) {
      window.location.href = 'https://www.google.com';
    }
  });
}
