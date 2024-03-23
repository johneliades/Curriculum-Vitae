(function ($) {
  $.fn.hasScrollBar = function () {
    return this.get(0).scrollHeight > this.get(0).clientHeight;
  };
})(jQuery);

if ($("body").hasScrollBar()) {
  $("#img_scroll").css("visibility", "visible");
}

$(window).on("wheel", function () {
  if (event.deltaY > 0) {
    $("#img_scroll").fadeOut(800);
    $(window).off("wheel");
  }
});
