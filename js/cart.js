console.log(window.location.search);

var urlParams = new URLSearchParams(window.location.search);

var collection = urlParams.get('collection');
var docId = urlParams.get('docid');
var shipping = 6.00;


console.log(collection);
console.log(docId);

loadData(collection, function (snapshot) {
    snapshot.docs.forEach(function (doc) {
        if (doc.id === docId) {
            console.log('Fousdfsdnd it !!! ' + doc.data().img);
            console.log(doc.data().name);
            console.log(doc.data().price);
            console.log(doc.data().description);

            $('#car-name').html(doc.data().name);
            $('.car-price').text(doc.data().price);

            $('#tax').html((doc.data().price * 0.09).toFixed(2));
            $('#total').html((doc.data().price * 1.09 + shipping).toFixed(2));
            $('#car-img').attr('src', doc.data().img);
            $('#car-description').html(doc.data().description);
        }
    });
});
$("#cart-button").attr("href", "cart.html?collection=" + collection + "&docid=" + docId);
$("#edit-button").attr("href", "customize.html?collection=" + collection + "&docid=" + docId);

$(".product-quantity input").on('click', function () {
    $(".car-price").text($(".car-price").val() * $(".number").val());
});
