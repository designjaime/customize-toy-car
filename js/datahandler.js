function loadCarsData() {
    var userDataRef = firebase.database().ref("cars").orderByKey();
    userDataRef.once("value").then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            console.log(childSnapshot.val());

            var name_val = childSnapshot.val().name;
            var image_val = childSnapshot.val().image;
            var price_val = childSnapshot.val().price;
            var description_val = childSnapshot.val().description;

            console.log('name_val = ' + name_val);
            console.log('image_val = ' + image_val);
            console.log('price_val = ' + price_val);
            console.log('name_val = ' + name_val);

            // $("#name").append(name_val);
            // $("#id").append(id_val);

        });
    });
}
