const fibonacci = function(a) {
	isNumber = Number(a);
	if (isNumber < 0){
		return "OOPS"
	}
	else if (isNumber === 0){
		return isNumber;
	}
	else{
		let array = [1,1];
		for (i=2; i < isNumber; i++){
		array.push(array[i-1] + array[i-2]);
	}
	return array[isNumber-1];
	}
};

// Do not edit below this line
module.exports = fibonacci;
