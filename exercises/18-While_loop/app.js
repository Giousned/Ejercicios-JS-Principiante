//fix this function:
function startCounting() {
	let counter = 100;
	while (counter >= 0) {
		console.log(counter);
		counter--;
	}

	return counter;
}

startCounting();

/* OTRA SOLUCION
function startCounting() {
	let counter = 101;
	while (counter > 0) {
		counter--;
		console.log(counter);
	}

	return counter;
}
*/