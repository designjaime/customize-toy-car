$(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#testimage").click(function() {
        alert('clicked');
    });

    // Image popup
    $('.modalable').click(function() {
        $('#modal-img-popup').css({ display: "block" });
        $("#modal-img-popup .modal-content").attr('src', this.src);
        $("#modal-img-popup .modal-caption").innerHTML = this.alt;
    });

    $("#modal-img-popup .close").click(function() {
        $(this).parent().hide();
    });

    $(".draggable").draggable().resizable();
    $(".droppable").droppable({
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("img")
                .html("Dropped!");
        }
    });

});

function handleSignup() {

    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;

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

            function() {
                alert("user created");
            }
        )

        .catch(
            function(error) {
                alert(error.message);
            }
        )

}


function handleSignin() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            function() {
                //window.location.href="http://google.com";
                window.location.href = "home.html";
            }
        )

        .catch(
            function(error) {
                alert("wrong username or password");
            }
        )
}

function handleSignout() {
    firebase.auth().signOut()
        .then(
            function() {
                window.location.href = "index.html";
            })

        .catch(
            function(error) {
                alert(error.message);
            }
        )

}

function handleFBlogin() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;

                window.location.href = "home.html";
                console.log(user)


            })

            .catch(
                function(error) {
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
            .then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;

                window.location.href = "home.html";

            })

            .catch(
                function(error) {
                    alert(error.message);
                }
            )


    } else {
        handleSignout();
    }

}

/*Leon*/
/*From https://bootsnipp.com/snippets/featured/payment-form-with-total-preview */
function calc_total(){
    var sum = 0;
    $('.input-amount').each(function(){
        sum += parseFloat($(this).text());
    });
    $(".preview-total").text(sum);    
}
$(document).on('click', '.input-remove-row', function(){ 
    var tr = $(this).closest('tr');
    tr.fadeOut(200, function(){
    	tr.remove();
	   	calc_total()
	});
});

$(function(){
    $('.preview-add-button').click(function(){
        var form_data = {};
        form_data["description"] = $('.payment-form input[name="description"]').val();
        form_data["amount"] = parseFloat($('.payment-form input[name="amount"]').val()).toFixed(2);
        form_data["date"] = $('.payment-form input[name="date"]').val();
        form_data["remove-row"] = '<span class="glyphicon glyphicon-remove"></span>';
        var row = $('<tr></tr>');
        $.each(form_data, function( type, value ) {
            $('<td class="input-'+type+'"></td>').html(value).appendTo(row);
        });
        $('.preview-table > tbody:last').append(row); 
        calc_total();
    });  

$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});
	
	
});