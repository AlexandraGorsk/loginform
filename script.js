const submitButton = document.body.querySelector('.submit');
const login = document.body.querySelector('.login');
const email = document.body.querySelector('.email');
const password = document.body.querySelector('.password');
const password2 = document.body.querySelector('.confirm');

submitButton.addEventListener('click', (e) => {
	if (login.value.length > 10) {
		login.classList.add('error-border');
		const errorLogin = document.body.querySelector('.loginerror');
		errorLogin.textContent = 'Max length this field is 10';
	}
	if (!email.value.includes('@')) {
		email.classList.add('error-border');
		const errorEmail = document.body.querySelector('.emailerror');
		errorEmail.textContent = 'Must be like username@hostname';
	}
	if (password.value != password2.value) {
		password.classList.add('error-border');
		password2.classList.add('error-border');
		const errorPassword = document.body.querySelector('.passworderror');
		const errorPassword2 = document.body.querySelector('.password_error');
		errorPassword.textContent = 'Must equal';
		errorPassword2.textContent = 'Must equal';
	}
});
