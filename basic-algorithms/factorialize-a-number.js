//Return the factorial of the provided integer.

function factorialize(num) {
	if (num === 0) {
		return 1;
	} else {
		var total = 1;
		while (num > 0) {
  			total *= num;
  			num --;
		}
		return total;
	}
}

//Refactored with a for loop

function factorialize(num) {
	if (num === 0) {
		return 1;
	} else {
		for (var total = 1; num > 0; num --) {
  			total *= num;
		}
		return total;
	}
}
