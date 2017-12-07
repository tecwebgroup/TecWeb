$(function() {
	// Imposta i placeholder per i text fields
	$("#user").attr("placeholder", "Username");
	$("#pass").attr("placeholder", "Password");
	
	// Disabilita il trascinamento delle immagini
	$('img').on('dragstart', function(event) {
								event.preventDefault();
							 });
							 
	// Disabilita il placeholder quando la text area è in focus					 
	$("#user, #pass").focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
          .attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));		 
	});					 
});
