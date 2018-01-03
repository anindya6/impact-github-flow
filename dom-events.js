const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

// window.onload = () => {
//   greetingEl.innerText = "oh, hey there!"
//   renderAstros()
// }
//
// renderAstros = () => {
//   const astros = peopleInSpace["people"]
//   let peopleEls = astros.map((a) => {
//     let name = a["name"]
//     return `<li>${name}</li>`
//   })
//   astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
// }

// create a function that alerts "these are all the astronauts!" when the title element is clicked.

var title = document.getElementsByClassName("title")[0];
title.onclick = () => {
	alert("yppp");
}

// log to the console the client's x coordinate of their mouse as they move it around the window.
document.addEventListener("mousemove", function (event) {
	var x = event.clientX;
	console.log(x);
});

// make an element that displays the most recent key pressed in the DOM
var key = document.getElementById("recentKey");
document.addEventListener("keyup", function (event) {
	key.innerHTML = "Most recent key pressed: " + event.key;
});

// create a text input element. When a user clicks on the text field to input, 
// log the input element to console.
var inp = document.getElementById("input");
inp.addEventListener("click", function (event) {
	console.log(inp.value);
});

// when a user clicks away from the input, log ("bye") to the console.
document.addEventListener("click", function (event) {
	if (event.target != inp) {
		console.log("bye");
	}
});

// wrap the input element with a form element.

// when the form is submitted, render the client's inputted text to the DOM
document.getElementById("form").addEventListener("submit", function (event) {
	event.preventDefault();
	document.getElementById("out").innerHTML = "You entered: " + inp.value;
	inp.value = ""; 
});


// HINT: look into event.preventDefault()
