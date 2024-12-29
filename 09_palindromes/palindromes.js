const palindromes = function (string) {
	const normalized = string.toLowerCase().replace(/[^a-z0-9]/g, '');
	const reversed = normalized.split("").reverse().join("");
	return normalized === reversed;
};

// Do not edit below this line
module.exports = palindromes;
