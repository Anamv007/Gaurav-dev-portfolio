/* =========================================
   CONTACT FORM — Validation & Submit
   ========================================= */

const form = document.getElementById('contact-form');
const submitBtn = form?.querySelector('.btn-submit');
const submitText = document.getElementById('submit-text');
const submitIcon = document.getElementById('submit-icon');
const successBanner = document.getElementById('success-banner');

// ── Input focus ripple ──
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('focus', () => {
    input.closest('.form-group')?.classList.add('focused');
  });
  input.addEventListener('blur', () => {
    input.closest('.form-group')?.classList.remove('focused');
  });
});

// ── Validation ──
function validateField(field, errorId, message) {
  const errorEl = document.getElementById(errorId);
  if (!field.value.trim()) {
    field.classList.add('error');
    if (errorEl) errorEl.textContent = message;
    return false;
  }
  field.classList.remove('error');
  if (errorEl) errorEl.textContent = '';
  return true;
}

function validateEmail(field, errorId) {
  const errorEl = document.getElementById(errorId);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!field.value.trim()) {
    field.classList.add('error');
    if (errorEl) errorEl.textContent = 'Email is required.';
    return false;
  }
  if (!emailRegex.test(field.value)) {
    field.classList.add('error');
    if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
    return false;
  }
  field.classList.remove('error');
  if (errorEl) errorEl.textContent = '';
  return true;
}

// ── Live validation ──
document.getElementById('name')?.addEventListener('blur', () => {
  validateField(document.getElementById('name'), 'name-error', 'Name is required.');
});
document.getElementById('email')?.addEventListener('blur', () => {
  validateEmail(document.getElementById('email'), 'email-error');
});
document.getElementById('message')?.addEventListener('blur', () => {
  validateField(document.getElementById('message'), 'message-error', 'Message cannot be empty.');
});

// ── Form Submit ──
form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');

  const isNameValid = validateField(nameField, 'name-error', 'Name is required.');
  const isEmailValid = validateEmail(emailField, 'email-error');
  const isMessageValid = validateField(messageField, 'message-error', 'Message cannot be empty.');

  if (!isNameValid || !isEmailValid || !isMessageValid) return;

  // Loading state
  submitBtn.classList.add('loading');
  submitText.textContent = 'Sending...';
  submitIcon.textContent = '⏳';

  // Simulate async send (replace with actual fetch/EmailJS/FormSpree)
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Success state
  submitBtn.classList.remove('loading');
  submitBtn.classList.add('success');
  submitText.textContent = 'Sent!';
  submitIcon.textContent = '✓';
  successBanner.classList.add('show');

  // Reset form after delay
  setTimeout(() => {
    form.reset();
    submitBtn.classList.remove('success');
    submitText.textContent = 'Send Message';
    submitIcon.textContent = '→';
    successBanner.classList.remove('show');
  }, 5000);
});
