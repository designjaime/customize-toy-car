
console.log(window.location.search);

var urlParams = new URLSearchParams(window.location.search);

var collection = urlParams.get('collection');
var docId = urlParams.get('docid');

console.log(collection);
console.log(docId);

loadData(collection, function (snapshot) {
    snapshot.docs.forEach(function (doc) {
        if (doc.id === docId) {
            console.log('Found it !!! ' + doc.data().img);
            console.log(doc.data().name);
            console.log(doc.data().price);
            console.log(doc.data().description);

            $('#car-name').html(doc.data().name);
            $('#car-price').html(doc.data().price);
            $('#car-img').attr('src', doc.data().img);
            $('#car-description').html(doc.data().description);
        }
    });
});
