function numberGenerator() {
	var num;
	for (var i = 1; i <= 5; i++) {
		num = Math.floor((Math.random() * 20) + 1);
		if (num % 2 === 0) {
			console.log(num + ' четное');
		} else {
			console.log(num + ' нечетное');
		}
	}
}
//end function numberGenerator()

function multiplicationTable() {
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
			console.log(i + ' * ' + j + ' = ' + (i * j));
		}
	}
}
//end function multiplicationTable()

function checkAssignGrade() {
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

	for (var i = 80; i <= 100; i++) {
		 console.log('Для i=' + i + ' оценка ' + assignGrade(i));
    }
}
// function checkAssignGrade()
