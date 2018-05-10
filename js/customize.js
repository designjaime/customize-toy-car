$(function () {
  $("#car-img-range").on('input', function () {
    var imgNum = $(this).val();
    var formattedImgNum = ("0" + imgNum).slice(-2);
    document.getElementById("car-img").src = carImgUrl.replace("01.jpg", formattedImgNum + ".jpg");
  });

  $(".car-audio-select").click(function (e) {
    if ($(this).hasClass('active')) {
      $(".car-audio-select.active").removeClass('active');
    } else {
      $(".car-audio-select.active").removeClass('active');
      $(this).addClass('active');
    }
    return false;
  });

  $("#cart-button").click(function () {
    $("#cart-button").attr("href", "cart.html?collection=" + collection + "&docid=" + docId + "&color=" + $("#car-img-overlay").val().substr(1));
  });
});