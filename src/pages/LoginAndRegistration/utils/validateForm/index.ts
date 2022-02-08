export function validateName() {
  const inputName = document.querySelector('input[type="name"]');
  if (!(inputName instanceof HTMLInputElement)) {
    throw new Error('Error');
  }
  inputName.addEventListener('input', () => {
    const valid = /^([А-ёя|A-z]{1})([А-ёя|A-z|\w]{1,20})$/.test(inputName.value);
    if (!valid && inputName.value.length !== 0) {
      inputName.setCustomValidity('Введите корректное имя.');
    } else {
      inputName.setCustomValidity('');
    }
  });
}

export function validateEmail() {
  const inputEmail = document.querySelector('input[type="email"]');
  if (!(inputEmail instanceof HTMLInputElement)) {
    throw new Error('Error');
  }
  inputEmail.addEventListener('input', () => {
    const inputValue = inputEmail.value;
    const valid = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(inputValue);
    if (!valid && inputValue.length !== 0) {
      inputEmail.setCustomValidity('Введите корректный email.');
    } else {
      inputEmail.setCustomValidity('');
    }
  });
}

export function validatePassword() {
  const inputPassword = document.querySelector('input[type="Password"]');
  if (!(inputPassword instanceof HTMLInputElement)) {
    throw new Error('Error');
  }
  inputPassword.addEventListener('input', () => {
    const inputValue = inputPassword.value;
    const valid = /(?=.*[0-9])(?=.*[A-z])[0-9A-z]{8,20}$/.test(inputValue);
    if (!valid) {
      inputPassword.setCustomValidity('Пароль должен быть от 8 до 20 символов и содержать латинские буквы и цифры.');
    } else {
      inputPassword.setCustomValidity('');
    }
  });
}
