$(function () {
  $("#car-img-range").on('input', function () {
    var imgNum = $(this).val();
    var formattedImgNum = ("0" + imgNum).slice(-2);
    document.getElementById("car-img").src = carImgUrl.replace("01.jpg", formattedImgNum + ".jpg");
  });
});

