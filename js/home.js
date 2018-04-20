function myFunction() {
    var content = $(this).html();
    $("#result").text(content);
    var mytext =
        '<div class="item-1">' +
        '<div class="row">' +
        '<div class="col-4">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col-4">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col-4">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '</div>' +
        '<div class="row mt-2">' +
        '<div class="col-4">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col-4">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col-4">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '</div>';
    $("#type1-car").replaceWith(mytext);
}
function myFunction2() {
    var content = $(this).html();
    $("#result2").text(content);
    var mytext =
        '<div class="item-2">' +
        '<div class="col">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col mt-2">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col mt-2">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '</div>';
    $("#type2-truck").replaceWith(mytext);
}

function myFunction3() {
    var content = $(this).html();
    $("#result3").text(content);
    var mytext =
        '<div class="item-3">' +
        '<div class="col">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col mt-2">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '<div class="col mt-2">' +
        '<a href="https://placeholder.com"><img src="http://via.placeholder.com/180x180"></a>' +
        '</div>' +
        '</div>';
    $("#type3-suv").replaceWith(mytext);
}