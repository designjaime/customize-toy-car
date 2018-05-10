Stripe.setPublishableKey('your_Key')
		
		var stripeResponseHandler = function(status,response){
			var $form = $('#payment');
			if(response.error){
				$form.find('.payment-errors').text(response.error.message);
				$form.find('button').prop('disabled', false);
				
			}else{
			 var token = response.id;
			 alert(token);
			}
		}
		jQuery(function(){
			$('#payment-form').submit(function(e){
				var $form = $(this);
				$form.find('button').prop('disabled', true);
				Stripe.card.createToken($form,stripeResponseHandler);
				return false;
			});
		});