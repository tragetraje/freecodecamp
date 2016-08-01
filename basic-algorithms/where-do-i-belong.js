//Return the lowest index at which a value (second argument) //should be inserted into an array (first argument) once it //has been sorted. The returned value should be a number


		function getIndexToIns(arr, num) {
		var concatenated = arr.concat(num);
		concatenated.sort(function(smaller, bigger) {
			return smaller - bigger;
		});
			return concatenated.indexOf(num);
		}

		getIndexToIns([40, 60], 50);
