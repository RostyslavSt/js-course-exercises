function hasRepeatingElements(arr) {
	var repeatElements = false;
	var len = arr.length - 1;
	for (var i = 0; i < (arr.length - 1); i++) {
		for (var j = (i + 1); j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				return repeatElements = true;
			}
		}
	}
	return repeatElements;
}
//end 

function negativeElementsSum(arr) {
	var sum = 0; 
	var j; // variable to fix index of array with zero value
	function findZeroIndex() { // function to find index of array with zero value
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === 0) {
				return i;
			}
		}
	}
	j = findZeroIndex(); 
	for (; j < arr.length; j++) {
		if (arr[j] < 0) {
			sum = sum + arr[j];
		}
	}
	return sum;
}
//end 

function commonElements(arr1, arr2) {
	var newArr = []; // array for new elements
		for (var i = 0; i < arr1.length; i++) {
			for (var j = 0; j < arr2.length; j++) {
				if ((arr1[i] === arr2[j]) && !checkElement(newArr, arr1[i])) {
					newArr.push(arr1[i]);
				}
			}
		}
		return newArr;

		//function for checking: if we have already this element in newArray
		function checkElement(array, element) {
			var value = false;
			for (var k = 0; k < array.length; k++) {
				if (array[k] === element) {
					return value = true;
				}
			}
			return value;
		}
}
// end

function identityMatrix(size) {
	if (size < 1 || size > 10) {	//check for range from 1 to 10
		console.log('Your entered numbers out of range. Please enter in range from 1 to 10');
		return null;
	}
	var arr = [];
	for (var i = 0; i < size; i++) { //create main array
		arr[i] = [];
		for (var j = 0; j < size; j++) { //create array in array
			arr[i][j] = 0;
		}
		arr[i][i] = 1;
		// console.log(arr2); // output matrix to console
	}
	console.log(arr); 

	return arr;
}

