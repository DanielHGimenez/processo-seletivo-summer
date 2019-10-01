$(document).ready(function(){
	$('#carrousel').children().children().each(function(index){
		$(this).attr('style', 'background-image: url(img/carrousel'+ $(this).attr('slide') +'.jpg);');
	});
	$('.arrow-left').click(function(){
		var i = parseInt($('#carrousel .carrousel').attr('slide-now'));
		var w = ($(window).width() < 768 ? -100 : -20);
		if(i == 1){
			i = i - 1 < 0 ? 5 : i - 1;
			$('#carrousel .carrousel').attr('style', 'transition: transform 0s; transform: translateX('+ i * (-20) +'vw);');
			$('#carrousel .carrousel').attr('style', 'transition: transform .4s ease-in; transform: translateX('+ i - 1 * w +'vw);');
			$('#carrousel .carrousel').attr('slide-now', i);
		} else {
			i = i - 1 < 0 ? 5 : i - 1;
			$('#carrousel .carrousel').attr('style', 'transition: transform .4s ease-in; transform: translateX('+ i * w +'vw);');
			$('#carrousel .carrousel').attr('slide-now', i);
		}
	});
	$('.arrow-right').click(function(){
		var i = parseInt($('#carrousel').children('.carrousel').attr('slide-now'));
		var w = ($(window).width() < 768 ? -100 : -20);
		if(i == 5){
			i = i + 1 > 5 ? 0 : i + 1;
			$('#carrousel .carrousel').attr('style', 'transition: transform 0s; transform: translateX('+ i * (-20) +'vw);');
			$('#carrousel .carrousel').attr('style', 'transition: transform .4s ease-in; transform: translateX('+ i + 1 * w +'vw);');
			$('#carrousel .carrousel').attr('slide-now', i);
		} else {
			i = i + 1 > 5 ? 0 : i + 1; 
			$('#carrousel .carrousel').attr('style', 'transition: transform .4s ease-in; transform: translateX('+ i * w +'vw);');
			$('#carrousel .carrousel').attr('slide-now', i);
		}
	});
});