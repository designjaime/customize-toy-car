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
        isRightSide = (i + 1) % 2 === 0;
        isLeftSide = !isRightSide;
        isLastItem = i === snapshot.docs.length - 1;

        str += isLeftSide ? leftItemDiv(doc.id, doc.data().img) : rightItemDiv(doc.id, doc.data().img);

        if (isLeftSide && isLastItem) {
            str += '<div class="col"></div>';
        } else if (isRightSide) {
            str += '</div>' + divStart;
        }
    });
    str += '</div>';
    $('#sedan-car-items').append(str);
});

// load trucks data from database.
loadData("trucks", function (snapshot) {
    snapshot.docs.forEach(function (doc) {
        $('#truck-car-items').append(singleItemDiv(doc.id, doc.data().img));
    });
});

// load trucks data from database.
loadData("jeeps", function (snapshot) {
    snapshot.docs.forEach(function (doc) {
        $('#suv-car-items').append(singleItemDiv(doc.id, doc.data().img));
    });
});

function leftItemDiv(docId, imgUrl) {
    return '' +
        '<div class="col text-left">' +
        '<a href="car-init.html?id=' + docId + '">' +
        '    <img class="img-fluid" src="' + imgUrl + '"> </a>' +
        '</div>';
}

function rightItemDiv(docId, imgUrl) {
    return '' +
        '<div class="col text-right">' +
        '<a href="car-init.html?id=' + docId + '">' +
        '    <img class="img-fluid" src="' + imgUrl + '"> </a>' +
        '</div>';
}

function singleItemDiv(docId, imgUrl) {
    return '' +
        '<div class="col">' +
        '<a href="car-init.html?id=' + docId + '">' +
        '    <img class="img-fluid" src="' + imgUrl + '"> </a>' +
        '</div>';
}
