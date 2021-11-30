const submitButton = document.body.querySelector('.submit');
const login = document.body.querySelector('.login');
const email = document.body.querySelector('.email');
const password = document.body.querySelector('.password');
const password2 = document.body.querySelector('.confirm');
// function button(){
submitButton.addEventListener('click', (e) => {
	if (login.value.length > 10) {
		login.classList.add('error');
		const errorLogin = document.createElement('p');
		errorLogin.textContent = 'Max length this field is 10'; //не рабоатет
		login.append(errorLogin);
	}
	if (password.value != password2.value) {
        password.classList.add('error');
        password2.classList.add('error');
		alert('епрст, ну пароли же разные');
		const errorPassword = document.createElement('p');
		errorPassword.textContent = 'Must equal';
	}
});
// }
// button()
