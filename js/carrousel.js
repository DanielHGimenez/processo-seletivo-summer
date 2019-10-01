$(document).ready(function(e){
	$('.dot').click(function(){
		$(this).parent().children('.active').removeClass('active');
		$(this).addClass('active');
		var i = $(this).attr('slide-to');
		$(this).parent().parent().parent().children('.carrousel').attr('style', "transform: translateX(" + (-100*i) + "vw);");
	});
	$('.dot-2').click(function(){
		$(this).parent().children('.active').removeClass('active');
		$(this).addClass('active');
		var i = $(this).attr('slide-to');
		$('#clinica .items').attr('style', "transform: translateX(" + (-100*i) + "vw);");
	});
});