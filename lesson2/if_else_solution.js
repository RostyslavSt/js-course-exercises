function greaterNum(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else return num2;
}

function helloWorld(lang) {
	if (lang === 'es') {
		return 'Hola, mundo';
	} else if (lang === 'en') {
		return 'Hello, World';
	} else if (lang === 'de') {
		return 'Hella, Welt';
	} else if (lang === 'default')
	 return 'Привет, Мир';
}

function assignGrade(score) {
	if (score >= 81 && score <= 100) {
		return 5;
	}
	if (score >= 61 && score <= 80) {
		return 4;
	}
	if (score >= 41 && score <= 60) {
		return 3;
	}
	if (score >= 21 && score <= 40) {
		return 2;
	}
	if (score >= 0 && score <= 20) {
		return 1;
	}
}
