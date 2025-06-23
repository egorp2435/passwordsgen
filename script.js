const upperBox = document.getElementById('uppers');
const lowerBox = document.getElementById('lowers');
const resultBox = document.getElementById('result');
const lengthBox = document.getElementById('length');
const numbersBox = document.getElementById('numbers');
const symbolsBox = document.getElementById('symbols');
const copy = document.getElementById('copy');
const generateButton = document.getElementById('generate');

copy.addEventListener('click', () => {
	const text = document.createElement('textarea');
	const password = resultBox.innerText;
	if (!password) { 
		return; 
	}
	text.value = password;
	document.body.appendChild(text);
	text.select();
	document.execCommand('copy');
	text.remove();
	alert('Скопировано');
});

generateButton.addEventListener('click', () => {
	resultBox.innerText = generatePassword(lowerBox.checked, upperBox.checked, numbersBox.checked, symbolsBox.checked, +lengthBox.value);
});

function randomLower() {
	const lower = 'qwertyuiopasdfghjklzxcvbnm'
	return lower[Math.floor(Math.random() * lower.length)];
}
function randomUpper() {
	const upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
	return upper[Math.floor(Math.random() * upper.length)];
}
function randomNumber() {
	const nums = '1234567890'
	return nums[Math.floor(Math.random() * nums.length)];
}
function randomSymbol() {
	const symbols = '!";:/.,><{[}]#№@$^%&?*)(';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lowers, uppers, numbers, symbols, length) {
	if (!lowers && !uppers && !numbers && !symbols) {
		return '';
	}
	let functions = [];
	if (lowers) functions.push(randomLower);
	if (uppers) functions.push(randomUpper);	
	if (numbers) functions.push(randomNumber);
	if (symbols) functions.push(randomSymbol);
	let password = '';
	for (let i = 0; i < length; i++) {
		password += functions[Math.floor(Math.random() * functions.length)]();
	}
	return password;
}
