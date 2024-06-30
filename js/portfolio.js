var main_color = true;
var last_document;

$(".modal_link").click(function () {
  $("img.modal_loading").show();
  $("#modal_content").css("opacity", "0");

  var href = $(this).attr("href");

  // Close only when the same document is clicked again else reload
  if ($("#modal").is(":visible") && last_document == href) {
    $("#modal").hide("fast");
  } else {
    last_document = href;
    $("#modal").show("fast");
  }
});

$("#iframe_modal").on("load", function () {
  $("img.modal_loading").hide();
  $("#modal_content").css("opacity", "1");
});

$("#close_modal").click(function () {
  if ($("#modal").is(":visible")) {
    $("#modal").hide("fast");
    $("#iframe_modal").attr("src", "about: blank;");
  }
});

function color_change() {
  var body = $("body");
  if (main_color) {
    body.css("--main-bg-color", "#181818");
    body.css("--main-font-color", "#78C82D");
  } else {
    body.css("--main-bg-color", "black");
    body.css("--main-font-color", "aqua");
  }

  main_color = !main_color;

  $("html").toggleClass("color");
  $(".card").toggleClass("card_color_toggle");
  $("a.button").toggleClass("cursor");
  $("img.png").toggleClass("cursor");
}

$(document).keyup(function (e) {
  if (event.key === "Escape") {
    $("#modal").hide("fast");
  } else if (event.key === "c") {
    color_change();
  }
});

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

const faders = document.querySelectorAll(".card");
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

$(document).ready(function () {
  $("#notification").addClass("show").text("Tap/hover a project for preview");
  setTimeout(function () {
    $("#notification").removeClass("show");
  }, 3000);
});

// The code here handles when the img_scroll icon disappears

$(window).on("wheel", function () {
  if (event.deltaY > 0) {
    $("#img_scroll").fadeOut(800);
    $(window).off("wheel");
  }
});

var startY;

$(window).on("touchstart", function (event) {
  var touch = event.originalEvent.touches[0];
  startY = touch.clientY;
});

$(window).on("touchmove", function (event) {
  if (!startY) {
    return;
  }

  var touch = event.originalEvent.touches[0];
  var deltaY = touch.clientY - startY;

  if (deltaY < 0) {
    $("#img_scroll").fadeOut(800);
    $(window).off("touchmove");
  } else {
    startY = touch.clientY;
  }
});

$(window).on("touchend", function () {
  startY = null;
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const video = card.querySelector("video");
    if (video) {
      // Create the loading layer
      const loadingLayer = document.createElement("div");
      loadingLayer.className = "loading-layer";

      // Create the spinner element
      const spinner = document.createElement("div");
      spinner.className = "spinner";

      // Create the text element
      const text = document.createElement("div");
      text.textContent = "Loading...";

      // Append the spinner and text to the loading layer
      loadingLayer.appendChild(spinner);
      loadingLayer.appendChild(text);

      // Insert the loading layer into the card
      card.appendChild(loadingLayer);

      if (video.readyState >= video.HAVE_ENOUGH_DATA) {
        loadingLayer.classList.add("hidden");
      }
      video.addEventListener("canplaythrough", () => {
        loadingLayer.classList.add("hidden");
      });

      video.addEventListener("error", () => {
        text.textContent = "Failed to load video";
      });
    }
  });
});
