const sumAll = function(firstNum,lastNum) {
	
	if(firstNum > 0 && 
		 lastNum > 0 && 
		 typeof firstNum === 'number' &&
		 typeof lastNum === 'number' && 
		 firstNum % 1 === 0 && 
		 lastNum % 1 ===0 ){
	maxNum = Math.max(firstNum,lastNum);
	minNum = Math.min(firstNum,lastNum);
	let numSum = 0;
	for (i = minNum-1; i < maxNum; i++ ){
		numSum += (i+1);
	}
	return numSum;
}
else{
	return "ERROR";
}
}
// Do not edit below this line
module.exports = sumAll;
