var spinner_buttons = document.querySelectorAll(".spinner");

var i;
for (i=0; i<spinner_buttons.length; i++) {
	spinner_buttons[i].addEventListener("click", color_change);
}

var main_color=true;

function color_change() {
	var i;
	const element = document.querySelector('body');
	const style = getComputedStyle(element);

	var background_html = document.getElementsByTagName("html")[0];
	if(background_html)
		background_html.classList.toggle("color");

	if(main_color) {
		element.style.setProperty('--main-bg-color', '#181818');
		element.style.setProperty('--main-font-color', '#78C82D');

		main_color=false;
	}
	else {
		element.style.setProperty('--main-bg-color', 'black');
		element.style.setProperty('--main-font-color', 'aqua');

		main_color=true;
	}
	
	var column_border = document.getElementsByClassName("column");
	for(i=0; i<column_border.length; i++)
		column_border[i].classList.toggle("column_color");

	var element_buttons = document.querySelectorAll("a.button");
	for(i=0; i<element_buttons.length; i++)
		element_buttons[i].classList.toggle("cursor");

	for (i=0; i<spinner_buttons.length; i++) {
		spinner_buttons[i].classList.toggle("spinnercursor");
	}
}

var modal = document.getElementById("modal");
var modal_content = document.getElementById("modal_content");
var span = document.getElementsByClassName("close")[0];

var modal_open = false;
var document_name;

// !! Each document must have a unique name !!
function toggle_modal(name) {
	modal_content.style.opacity = "10%"

	if(modal && modal_content) {
		// Close only when the same document is clicked again else reload
		if(modal_open && document_name==name) {
			modal.style.display = "none";
			modal_open = false;
		}
		else {
			// Blur until iframe is loaded again(onload=loading_finished())

			document_name = name;
			modal.style.display = "block";
			modal_open = true;
		}
	}
}

function loading_finished() {
	// Remove blur
	if(modal_content)
		modal_content.style.opacity = "100%"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	if(modal) {
		modal_open = false;
		modal.style.display = "none";
	}
}

// When the user presses (Esc), close the modal
window.addEventListener('keydown', function(e){
	if(modal) {
		if (e.keyCode == (window.event ? 27 : e.DOM_VK_ESCAPE)) {
			modal_open = false;
			modal.style.display = "none";
		}
	}
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target != modal) {
		//console.log("This closes the modal the first time too");

		//modal.style.display = "none";
	}
}