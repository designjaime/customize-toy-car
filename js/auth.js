
function handleSignup() {

    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    if (email.length < 4) {
        alert("Please enter a valid email address");
        return;
    }

    if (password.length < 4) {
        alert("Please use a stronger password");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            function () {
                alert("user created");
                window.location.href = "home.html";
            }
        )

        .catch(
            function (error) {
                alert(error.message);
            }
        )

}


function handleSignin() {
    var email = document.getElementById('signin-email').value;
    var password = document.getElementById('signin-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            function () {
                //window.location.href="http://google.com";
                window.location.href = "home.html";
            }
        )

        .catch(
            function (error) {
                alert("wrong username or password");
            }
        )
}

function handleSignout() {
    firebase.auth().signOut()
        .then(
            function () {
                window.location.href = "index.html";
            })

        .catch(
            function (error) {
                alert(error.message);
            }
        )

}

function handleFBlogin() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                window.location.href = "home.html";
                console.log(user)


            })

            .catch(
                function (error) {
                    alert(error.message);
                }
            )


    } else {
        handleSignout();
    }

}



function handlegooglelogin() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                window.location.href = "home.html";

            })

            .catch(
                function (error) {
                    alert(error.message);
                }
            )


    } else {
        handleSignout();
    }

}


