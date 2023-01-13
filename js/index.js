<!-- Shows the welcome message and then enables the bird -->
$("#profile_pic").click(function() {
	document.title = "[John@Portfolio]-[~]"

	iframe = document.getElementById('iframe_main');
	iframe.src = "quote_page.html";

	$("#iframe_main").focus();
});

$(".change_title").click(function() {
	var href = $(this).attr('href');
	href = href.replace('documents/','');
	href = 	href.replace('.html','');
	href = 	href.replace('.png','');
	href = 	href.replace('.pdf','');

	href = href.substr(0,1).toUpperCase() + href.substr(1);

	document.title = "[John@Portfolio]-[" + href + "]";

	$("#iframe_main").focus();
})