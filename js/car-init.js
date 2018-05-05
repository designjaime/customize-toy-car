console.log(window.location.search);

var urlParams = new URLSearchParams(window.location.search);

var collection = urlParams.get('collection');
var docId = urlParams.get('docid');
var carImgUrl;

console.log(collection);
console.log(docId);

loadData(collection, function (snapshot) {
  snapshot.docs.forEach(function (doc) {
    if (doc.id === docId) {
      console.log('Found it !!! ' + doc.data().img);
      console.log(doc.data().name);
      console.log(doc.data().price);
      console.log(doc.data().description);

      carImgUrl = doc.data().img;
      // only used by customize page to set slider max.
      $("#car-img-range").attr('max', doc.data().num_of_img);

      $('#car-name').html(doc.data().name);
      $('#car-price').html(doc.data().price);
      $('#car-img').attr('src', doc.data().img);
      $('#car-description').html(doc.data().description);
    }
  });
});

$("#customize-button").attr("href", "customize.html?collection=" + collection + "&docid=" + docId);
$("#cart-button").attr("href", "cart.html?collection=" + collection + "&docid=" + docId);


