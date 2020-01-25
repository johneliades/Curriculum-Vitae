var spinner_buttons = document.querySelectorAll(".spinner");

var i;
for (i=0; i<spinner_buttons.length; i++) {
	spinner_buttons[i].addEventListener("click", color_change);
}

function color_change() {
	var i;

	var element_headers = document.querySelectorAll("h2");
	for (i=0; i<element_headers.length; i++)
		element_headers[i].classList.toggle("color");
	
	var element_buttons = document.querySelectorAll("a.button");
	for(i=0; i<element_buttons.length; i++)
		element_buttons[i].classList.toggle("color");
	
	var background_body = document.getElementsByTagName("body")[0];
	if(background_body)
		background_body.classList.toggle("color");

	var background_html = document.getElementsByTagName("html")[0];
	if(background_html)
		background_html.classList.toggle("color");

	var iframe_border = document.querySelectorAll("iframe");
	for(i=0; i<iframe_border.length; i++)
		iframe_border[i].classList.toggle("color");

	var image_border = document.querySelectorAll("img");
	for(i=0; i<image_border.length; i++)
		image_border[i].classList.toggle("color");

	for (i=0; i<spinner_buttons.length; i++) {
		spinner_buttons[i].classList.toggle("spinnercolor");
	}
}

var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

var modal_open = false;
var document_name;

function toggle_modal(name) {
	if(modal) {
		if(modal_open && document_name==name) {
			modal.style.display = "none";
			document_name = ""	
			modal_open = false;
		}
		else {
			document_name = name;
			modal.style.display = "block";
			modal_open = true;
		}
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	if(modal) {
		modal_open = false;
		document_name = ""	
		modal.style.display = "none";
	}
}

window.addEventListener('keydown', function(e){
	if (e.keyCode == (window.event ? 27 : e.DOM_VK_ESCAPE)) {
		if(modal) {
			modal_open = false;
			document_name = ""	
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