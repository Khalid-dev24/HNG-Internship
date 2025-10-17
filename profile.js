
document.addEventListener('DOMContentLoaded', () => {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  const nameEl = document.querySelector('[data-testid="test-user-name"]');
  const bioEl = document.querySelector('[data-testid="test-user-bio"]');
  const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');

  const avatarUrlInput = document.querySelector('#avatarUrl');
  const avatarFileInput = document.querySelector('#avatarUpload');
  const nameInput = document.querySelector('#nameInput');
  const bioInput = document.querySelector('#bioInput');
  const applyBtn = document.querySelector('#applyBtn');

  
  function updateTime() {
    const now = Date.now();
    timeEl.textContent = `${now} (${new Date().toLocaleTimeString()})`;
  }
  updateTime();
  setInterval(updateTime, 500);

  
  function applyChanges() {
    const nameVal = nameInput.value.trim();
    const bioVal = bioInput.value.trim();
    const avatarUrlVal = avatarUrlInput.value.trim();

    if (nameVal) nameEl.textContent = nameVal;
    if (bioVal) bioEl.textContent = bioVal;
    if (avatarUrlVal) {
      // Validate basic url
      try {
        const url = new URL(avatarUrlVal);
        avatarImg.src = url.href;
      } catch (err) {
        alert('Invalid image URL');
      }
    }
  }

  applyBtn.addEventListener('click', applyChanges);

  
  avatarUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyChanges();
    }
  });

  
  avatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      avatarImg.src = ev.target.result;
    }
    reader.readAsDataURL(file);
  });

});
