const arrGroceryList = [
	'pomodori',
	'latte',
	'patate',
	'pesce',
	'cereali',
	'carne',
	'dentifricio',
];

const eleGroceryList = document.querySelector('.grocery-list');


let i = 0;
while ( i < arrGroceryList.length) {
    eleGroceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;
};

