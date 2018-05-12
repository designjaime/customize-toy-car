Stripe.setPublishableKey('pk_test_rOj6ems6tR2M0Sha4b9XkeSi')
var stripeResponseHandler = function (status, response) {
	var $form = $('#payment-form');
	if (response.error) {
		$form.find('.payment-errors').text(response.error.message);
		$form.find('button').prop('disable'.false);
	}
	else {
		var token = response.id;
		alert(token);
	}
}


//Submit form to Stripe
jQuery(function ($) {
	$('#payment-form').submit(function (e) {
		var $form = $(this);
		$form.find('button').prop('disable', true);
		Stripe.card.createToken($form, stripeResponseHandler);
		return false;
	});
});