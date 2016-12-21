$(document).ready(function(){
	$('.start').click(function(){
		$('#breakfast .toggle-body').slideDown();
	});
	$('.next').click(function(){
		$(this).parent().slideUp();
		
		$(this).parents('.toggle').next().find('.toggle-body').slideDown();
		$('html, body').delay(700).animate({
			//scrollTop: $(this).parents('.toggle').next().offset().top
			
		});
	});
	$('.prev').click(function(){
		$(this).parent().slideUp();
		console.log($(this).parent());
		$(this).parents('.toggle').prev().find('.toggle-body').slideDown();
	});

});