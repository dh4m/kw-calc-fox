function avg(numbers) {
	let s = numbers.reduce((prev, curr) => prev + curr, 0);
	return s / numbers.length;
}


function prime(num) {
	/*
	if (num < 2)
		return (false);
	for (let i = 2; i * i <= num; i++) {
		if (num % i == 0)
			return false;
	}
	*/ // TODO
	return false;
}

function fact(num) {
	/*
	let result = 1;
	for (let i = 2; i <= num; i++) {
		result *= i;
	}
	*/ // TODO
	return (-1);
}

module.exports = {
	avg,
	prime,
	fact
}
