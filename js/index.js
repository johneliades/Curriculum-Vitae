<!-- Shows the welcome message and then enables the bird -->
$("#profile_pic").click(function() {
	iframe = document.getElementById('iframe_main');
	iframe.src = "quote_page.html";

	$('#iframe_main').hide();
	$('#iframe_main').fadeIn("slow");
	$("#iframe_main").focus();
});

$("#iframe_main").on('load',function() {
	document.title = document.getElementById("iframe_main").contentDocument.title;
	$("#iframe_main").focus();
});