$(function () {
    $('.item-1').click(function () {
        $('.front-item').show();
        $('.back-item').hide();
        $('.item-1').toggle();
    });
    $('.item-2').click(function () {
        $('.front-item').show();
        $('.back-item').hide();
        $('.item-2').toggle();
    });
    $('.item-3').click(function () {
        $('.front-item').show();
        $('.back-item').hide();
        $('.item-3').toggle();
    });
})

// load cars data from database.
loadData("cars", function (snapshot) {
    divStart = '<div class="row justify-content-center">'
    str = divStart;
    snapshot.docs.forEach(function (doc, i) {
        var isRightSide = (i + 1) % 2 === 0;
        var isLeftSide = !isRightSide;
        var isLastItem = i === snapshot.docs.length - 1;
        console.log("load cars[%s], isRightSide[%s], isLeftSide[%s], isLastItem[%s] ... %s-%s",
            i, isRightSide, isLeftSide, isLastItem, doc.id, doc.data().img);

        if (isLeftSide) {
            str += leftItemDiv("cars", doc.id, doc.data().img);
            if (isLastItem) { // need an empty div for the last space.
                str += '<div class="col"></div>';
            }
        } else { // right side
            str += rightItemDiv("cars", doc.id, doc.data().img);
            if (!isLastItem) { // add another row for the next item. 
                str += '</div>' + divStart;
            }
        }
    });
    str += '</div>';
    $('#sedan-car-items').append(str);
});

// load trucks data from database.
loadData("trucks", function (snapshot) {
    snapshot.docs.forEach(function (doc) {
        $('#truck-car-items').append(singleItemDiv("trucks", doc.id, doc.data().img));
        console.log("load trucks ... %s-%s", doc.id, doc.data().img);
    });
});

// load jeeps data from database.
loadData("jeeps", function (snapshot) {
    snapshot.docs.forEach(function (doc) {
        $('#suv-car-items').append(singleItemDiv("jeeps", doc.id, doc.data().img));
        console.log("load jeeps ... %s-%s", doc.id, doc.data().img);
    });
});

function leftItemDiv(collection, docId, imgUrl) {
    return '' +
        '<div class="col text-right">' +
        '<a href="car-init.html?collection=' + collection + '&docid=' + docId + '">' +
        '    <img class="img-fluid" src="' + imgUrl + '"> </a>' +
        '</div>';
}

function rightItemDiv(collection, docId, imgUrl) {
    return '' +
        '<div class="col text-left">' +
        '<a href="car-init.html?collection=' + collection + '&docid=' + docId + '">' +
        '    <img class="img-fluid" src="' + imgUrl + '"> </a>' +
        '</div>';
}

function singleItemDiv(collection, docId, imgUrl) {
    return '' +
        '<div class="col">' +
        '<a href="car-init.html?collection=' + collection + '&docid=' + docId + '">' +
        '    <img class="img-fluid" src="' + imgUrl + '"> </a>' +
        '</div>';
}
