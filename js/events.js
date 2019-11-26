var spinner_buttons = document.querySelectorAll(".spinner");

var i;
for (i=0; i<spinner_buttons.length; i++) {
	spinner_buttons[i].addEventListener("click", color_change);
}

function color_change() {
	var element_headers = document.querySelectorAll("h2");
	var element_text = document.querySelectorAll("p.custom_font");
	var element_buttons = document.querySelectorAll("a.button");
	
	if(element_text && element_headers && element_buttons)	{		
		var i;

		for (i=0; i<element_headers.length; i++) {
			element_headers[i].classList.toggle("color");
		}
	
		for (i=0; i<element_text.length; i++) {
			element_text[i].classList.toggle("custom_font_color");
		}

		for (i=0; i<element_buttons.length; i++) {
			element_buttons[i].classList.toggle("button_color");			
		}
	}
}