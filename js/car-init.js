console.log(window.location.search);

var urlParams = new URLSearchParams(window.location.search);

var collection = urlParams.get('collection');
var docId = urlParams.get('docid');

console.log(collection);
console.log(docId);

