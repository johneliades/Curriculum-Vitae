// Shows the welcome message and then enables the bird
$("#profile_pic").click(function () {
  $("#iframe_main").hide();
  $("#iframe_main").fadeIn("slow");
  $("#iframe_main").focus();
});

$("#iframe_main").on("load", function () {
  $("#iframe_main").focus();
});

$(".iframe-link").click(function () {
  const page = this.getAttribute("href");
  history.pushState(null, "", `?page=${page}`);

  document.title = "[John@Portfolio]-" + this.getAttribute("data-name");
});

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("iframe_main");

  // Function to get URL parameter
  function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  page = getParameterByName("page");
  if (!page || page == "index.html") {
    page = "quote_page.html";
  }

  $(".iframe-link").each(function (index) {
    if ($(this).attr("href") == page) {
      document.title = "[John@Portfolio]-" + this.getAttribute("data-name");
    }
  });

  iframe.src = page;
});
