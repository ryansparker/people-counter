
let count = 0;
let tally = document.getElementById('count-el');
let btnIncrease = document.getElementById('btn-increase');
let btnDecrease = document.getElementById('btn-decrease');
let btnSave = document.getElementById('btn-save');
let saveEl = document.getElementById('save-el');


btnIncrease.addEventListener("click", () => {
	count++;
	tally.innerHTML = count;
});
btnDecrease.addEventListener("click", () => {
	count--;
	tally.innerHTML = count;
});
btnSave.addEventListener("click", () => {
	let countStr = count + " - ";

	saveEl.innerHTML += countStr;
    console.log(count)
	tally.innerHTML = 0;
	count = 0;
});


