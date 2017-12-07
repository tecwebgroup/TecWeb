$(function() {
	// Imposta i placeholder per i text fields
	$("#user").attr("placeholder", "Username");
	$("#pass").attr("placeholder", "Password");
	$("#pass_repeat").attr("placeholder", "Ripeti password");
	$("#place").attr("placeholder", "Località preferita");
	
	// Disabilita il trascinamento delle immagini
	$('img').on('dragstart', function(event) {
								event.preventDefault();
							 });
							 
	// Disabilita il placeholder quando la text area è in focus					 
	$("#user, #pass, #pass_repeat, #place").focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
          .attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));		 
	});					 
});
