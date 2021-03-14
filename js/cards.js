var main_color=true;
var last_document;

$(".spinner").click(function() {
	this.classList.toggle("spinnercursor");

	var body = $('body');
	if(main_color) {
		body.css('--main-bg-color', '#181818')
		body.css('--main-font-color', '#78C82D')
	}
	else {
		body.css('--main-bg-color', 'black')
		body.css('--main-font-color', 'aqua')
	}

	main_color = !main_color;

	$('html').toggleClass("color");
	$('.column').toggleClass("column_color");
	$('a.button').toggleClass("cursor");
	$(".png").toggleClass("spinnercursor");
});

$(".modal_link").click(function() {
	$("#modal_content").css("opacity", "0");
	
	var href = $(this).attr('href');

	// Close only when the same document is clicked again else reload
	if($("#modal").is(":visible") && last_document==href) {
		$("#modal").hide();
	}
	else {
		// Blur until iframe is loaded

		last_document = href;
		$("#modal").show();
	}
})

$('#iframe_modal').on("load", function() {
	$("#modal_content").css("opacity", "1");
});

$(".close_modal" ).click(function() {
	if($("#modal").is(":visible")) {
		$("#modal").hide();
	}
})

$(document).keyup(function(e) {
	if (e.keyCode === 27) 
		$("#modal").hide();
});