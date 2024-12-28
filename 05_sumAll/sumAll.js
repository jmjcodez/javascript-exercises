const sumAll = function(firstNum,lastNum) {
	let numSum = 0;
	for (i = firstNum-1; i < lastNum; i++ ){
		numSum += (i+1);
	}
	return numSum;
};

// Do not edit below this line
module.exports = sumAll;
