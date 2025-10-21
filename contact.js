document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const success = document.getElementById('success');

  let valid = true;

  // Clear old errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  // Validation
  if (name.value.trim() === '') {
    document.getElementById('error-name').textContent = 'Full name is required.';
    valid = false;
  }

  if (email.value.trim() === '') {
    document.getElementById('error-email').textContent = 'Email is required.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById('error-email').textContent = 'Enter a valid email address.';
    valid = false;
  }

  if (subject.value.trim() === '') {
    document.getElementById('error-subject').textContent = 'Subject is required.';
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  // Success
  if (valid) {
    success.hidden = false;
    this.reset();
    setTimeout(() => {
      success.hidden = true;
    }, 3000);
  } else {
    success.hidden = true;
    setTimeout(() => {
      document.querySelectorAll('.error').forEach(el => el.textContent = '');
    }, 3000);
  }
});
