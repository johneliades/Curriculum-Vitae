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

$("#close_modal").click(function() {
	if($("#modal").is(":visible")) {
		$("#modal").hide("fast");
	}
});

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
	$('.card').toggleClass("card_color_toggle");
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

const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
	entries,
	appearOnScroll
) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			return;
		}

		entry.target.classList.add("appear");
		appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

const faders = document.querySelectorAll(".card");
faders.forEach(fader => {
	appearOnScroll.observe(fader);
});

$(document).ready(function(){
	$("#notification").addClass("show").text("Tap/hover a project for preview");
	setTimeout(function(){
		$("#notification").removeClass("show");
	}, 3000);
});

window.onscroll = function() {
	$("#img_scroll").fadeOut(800);
}