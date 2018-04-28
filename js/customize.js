$(function() {
  $("#car-img-range").on('input', function() {
    var imgvalu = $(this).val();
    document.getElementById("car-img").src = carImgUrl.replace("1.jpg", imgvalu + ".jpg");
  });
});