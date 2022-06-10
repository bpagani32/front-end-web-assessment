console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
alert('The Form has been submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function pictureMouseover(evt) {
	evt.preventDefault();

alert('I like you oce alot ;P')
}
let pic= document.querySelector('#cat-pic')

pic.addEventListener('mouseover',pictureMouseover )
