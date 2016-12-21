$(document).ready(function(){
	$('.start').click(function(){
		$('#breakfast .toggle-body').addClass('active');
		if ($('#breakfast').is(':visible')) {
			$('html, body').animate({
				scrollTop: $(this).offset().top
			});	
		}
	});
	$('.next').click(function(){
		
		$(this).parent().removeClass('active');
		
		$(this).parents('.toggle').next().find('.toggle-body').addClass('active');
		if ($(this).parents('.toggle').next().find('.toggle-body').is(':visible')){
			console.log('is visible');
			$('html, body').animate({
				scrollTop: $(this).parents('.toggle').next().offset().top
			});	
		}
		
	});
	$('.prev').click(function(){
		$(this).parent().removeClass('active');
		
		$(this).parents('.toggle').prev().find('.toggle-body').addClass('active');
		if ($(this).parents('.toggle').prev().find('.toggle-body').is(':visible')){
			console.log('is visible');
			$('html, body').animate({
				scrollTop: $(this).parents('.toggle').prev().offset().top
			});	
		}
	});

});