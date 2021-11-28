var main_color=true;
var last_document;

$(".modal_link").click(function() {
	$("img.modal_loading").show();
	$("#modal_content").css("opacity", "0");
	
	var href = $(this).attr('href');

	// Close only when the same document is clicked again else reload
	if($("#modal").is(":visible") && last_document==href) {
		$("#modal").hide("fast");
	}
	else {
		last_document = href;
		$("#modal").show("fast");
	}
})

$('#iframe_modal').on("load", function() {
	$("img.modal_loading").hide();
	$("#modal_content").css("opacity", "1");
});

$("#close_modal" ).click(function() {
	if($("#modal").is(":visible")) {
		$("#modal").hide("fast");
	}
})

$("#color_wheel" ).click(function() {
	color_change();
})

function color_change() {
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
	$("img.png").toggleClass("cursor");
}

$(document).keyup(function(e) {
	if (event.key === "Escape") {
		$("#modal").hide("fast");
	}
	else if (event.key === "c") {
		color_change();
	}
});
