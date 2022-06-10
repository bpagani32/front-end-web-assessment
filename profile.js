function handleSubmit(evt) {
	evt.preventDefault();
	
alert('My Favorite Color is Red!');
}


let button1 = document.querySelector('#color');

button1.addEventListener('click', handleSubmit);



function handleSubmit2(evt) {
	evt.preventDefault();
	
alert('My Favorite Place is on a Cruise in the Carribean!');
}


let button2 = document.querySelector('#place');

button2.addEventListener('click', handleSubmit2);






function handleSubmit3(evt) {
	evt.preventDefault();
	
alert('My Favorite Ritual is the Black Luster Solider!');
}


let button3 = document.querySelector('#ritual');

button3.addEventListener('click', handleSubmit3);
