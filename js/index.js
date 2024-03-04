// Shows the welcome message and then enables the bird
$("#profile_pic").click(function () {
  $("#iframe_main").hide();
  $("#iframe_main").fadeIn("slow");
  $("#iframe_main").focus();
});

$("#iframe_main").on("load", function () {
  document.title = document.getElementById("iframe_main").contentDocument.title;
  $("#iframe_main").focus();
});
