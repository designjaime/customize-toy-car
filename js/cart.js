console.log(window.location.search);

var urlParams = new URLSearchParams(window.location.search);

var collection = urlParams.get('collection');
var docId = urlParams.get('docid');
var color = urlParams.get('color');
var shipping = 6.00;
var carPrice;


console.log(collection);
console.log(docId);
console.log(color);

loadData(collection, function (snapshot) {
    snapshot.docs.forEach(function (doc) {
        if (doc.id === docId) {
            console.log('Found it !!! ' + doc.data().img);
            console.log(doc.data().name);
            console.log(doc.data().price);
            console.log(doc.data().description);

            carPrice = doc.data().price;

            $('#car-name').html(doc.data().name);
            $('#car-img').attr('src', doc.data().img);
            $('#car-description').html(doc.data().description);

            // Set price value
            refreshPrice(1);
        }
    });
});

$("#car-img-overlay").val("#" + color);

$("#edit-button").attr("href", "customize.html?collection=" + collection + "&docid=" + docId);
$("#race-button").attr("href", "race.html?color=" + color);



$(".product-quantity input").on('click', function () {
    refreshPrice($(this).val());
});

function refreshPrice(numOfCars) {
    var totalPrice = carPrice * numOfCars;
    $(".car-price").text(totalPrice.toFixed(2));
    $('#tax').html((totalPrice * 0.09).toFixed(2));
    $('#total').html((totalPrice * 1.09 + shipping).toFixed(2));
}
