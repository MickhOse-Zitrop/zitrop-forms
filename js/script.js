window.onload = function () {
	document.querySelector('.preloader').classList.add('hidden');
	if (window.innerWidth > 1024) {
		document.querySelector('.header_bar').classList.add('show')
		document.querySelector('.fa-bars').classList.add('fa-xmark')
		document.querySelector('.fa-xmark').classList.remove('fa-bars')
	} else {
		document.querySelector('#header_logo').src = '../image/icon.jpg';
		document.querySelector('.menu').classList.remove('show')
	}
}

function form_show(id) {
	document.querySelector('.content_wrap').classList.add('hidden');
	document.querySelectorAll('.content_button').forEach(element => {
		element.tabIndex = -1;
	})
	document.querySelector('.content_link').tabIndex = -1;
	if (id == 'admin_button') {
		document.querySelector('#login_block').classList.add('showed')
		document.querySelector('#email').tabIndex = 1;
		document.querySelector('#password').tabIndex = 1;
		document.querySelector('.form_title').innerHTML = "Войти как администратор";
	} else if (id == 'user_button') {
		document.querySelector('#login_block').classList.add('showed')
		document.querySelector('#email').tabIndex = 1;
		document.querySelector('#password').tabIndex = 1;
		document.querySelector('.form_title').innerHTML = "Войти как пользователь";
	} else {
		document.querySelector('#register_block').classList.add('showed');
		document.querySelector('#reg_email').tabIndex = 1;
		document.querySelector('#reg_password').tabIndex = 1;
		document.querySelector('#reg_password_check').tabIndex = 1;
	}
}

function form_hide() {
	document.querySelector('.content_wrap').classList.remove('hidden');
	document.querySelectorAll('.content_button').forEach(element => {
		element.tabIndex = 1;
	})
	document.querySelector('.content_link').tabIndex = 1;
	document.querySelector('#form').reset();
	document.querySelector('#reg_form').reset();
	document.querySelectorAll('.form_block').forEach(element => {
		element.classList.remove('showed')
	});
	document.querySelectorAll('.form_input').forEach(element => {
		element.tabIndex = -1;
		element.classList.remove('error')
		if (element.type == 'text') {
			element.type = 'password'
		}
	});
	document.querySelectorAll('.form_submit').forEach(element => {
		element.tabIndex = -1;
		element.classList.remove('active')
	});
	document.querySelectorAll('.fa-eye-slash').forEach(element => {
		element.classList.remove('fa-eye-slash')
		element.classList.add('fa-eye')
	})
	document.querySelectorAll('.fa-eye').forEach(element => {
		element.classList.remove('error')
	})
}

document.querySelectorAll('.eye').forEach(element => {
	element.addEventListener('click', () => {
		element.classList.toggle('fa-eye-slash');
		element.classList.toggle('fa-eye');
		document.querySelectorAll('.form_input').forEach(element => {
			if (element.type == 'password')
				element.type = 'text';
			else if (element.type == 'text')
				element.type = 'password'
		})
	})
})

function check_input(input, type) {
	pattern_email = /^\S+@\S+\.\S+$/;
	pattern_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;
	if (type == 'password' || type == 'text') {
		if (pattern_password.test(input.value) || input.value == "") {
			input.classList.remove('error')
			document.querySelectorAll('.fa-eye').forEach(element => {
				element.classList.remove('error')
			})
			document.querySelectorAll('.fa-eye-slash').forEach(element => {
				element.classList.remove('error')
			})
		} else {
			input.classList.add('error')
			document.querySelectorAll('.fa-eye').forEach(element => {
				element.classList.add('error')
			})
			document.querySelectorAll('.fa-eye-slash').forEach(element => {
				element.classList.add('error')
			})
		}
	} else if (type == 'email') {
		if (pattern_email.test(input.value) || input.value == "") {
			input.classList.remove('error')
		} else {
			input.classList.add('error')
		}
	}

	if (document.querySelector('#reg_password').value !== document.querySelector('#reg_password_check').value) {
		document.querySelector('#reg_password_check').classList.add('error')
	} else {
		document.querySelector('#reg_password_check').classList.remove('error')
	}

	if ((document.querySelector('#email').classList.contains('error') || document.querySelector('#password').classList.contains('error')) || (document.querySelector('#email').value.length == 0 || document.querySelector('#password').value.length == 0)) {
		document.querySelector('#submit').classList.remove('active')
		document.querySelector('#submit').tabIndex = -1;
	} else {
		document.querySelector('#submit').classList.add('active')
		document.querySelector('#submit').tabIndex = 1;
	}

	if (((document.querySelector('#reg_email').classList.contains('error') || document.querySelector('#reg_password').classList.contains('error') || document.querySelector('#reg_password_check').classList.contains('error')) || (document.querySelector('#reg_email').value.length == 0 || document.querySelector('#reg_password').value.length == 0 || document.querySelector('#reg_password_check').value.length == 0)) || (document.querySelector('#reg_password').value !== document.querySelector('#reg_password_check').value)) {
		document.querySelector('#reg_submit').classList.remove('active')
		document.querySelector('#reg_submit').tabIndex = -1;
	} else {
		document.querySelector('#reg_submit').classList.add('active')
		document.querySelector('#reg_submit').tabIndex = 1;
	}
}

function show_menu(button) {
	button.classList.toggle('fa-bars');
	button.classList.toggle('fa-xmark');
	if (button.classList.contains('fa-bars')) {
		button.style.transform = 'rotate(180deg)';
	} else {
		button.style.transform = 'rotate(-180deg)';
	}
	document.querySelector('.header_bar').classList.toggle('show');
	document.querySelector('.menu').classList.toggle('show');
}

document.querySelectorAll('.main_item').forEach(element => {
	var selected = document.getElementsByClassName('selected');
	var select = document.getElementsByClassName('select');
	element.addEventListener('click', () => {
		var id_element = element.id.substr(element.id.length - 1);
		if (element != selected[0]) {
			if (selected[0]) {
				selected[0].classList.remove('selected');
				select[0].classList.remove('select')
			}
			element.classList.add('selected');
			document.querySelector('#main_wrap_' + id_element).classList.add('select')
		}
	})
})

function show_form() {
	document.querySelector('.hidden_form').style.display = 'flex';
}
