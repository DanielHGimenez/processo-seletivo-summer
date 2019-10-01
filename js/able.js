$(document).ready(function(){
	$('.toable').on("click", function(){
		$(this).parent().children().each(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}
		});

		if($(this).is("#orto")){
			$('#especialidades .bar-container > .bar').removeClass('fisio');
			$('#especialidades .bar-container > .bar').removeClass('espo');
			$('#especialidades .bar-container > .bar').addClass('orto');
		} else if($(this).is("#fisio")) {
			$('#especialidades .bar-container > .bar').removeClass('orto');
			$('#especialidades .bar-container > .bar').removeClass('espo');
			$('#especialidades .bar-container > .bar').addClass('fisio');
		} else {
			$('#especialidades .bar-container > .bar').removeClass('orto');
			$('#especialidades .bar-container > .bar').removeClass('fisio');
			$('#especialidades .bar-container > .bar').addClass('espo');
		}
		
		$(this).addClass('active');

		$(this).parent().children().each(function(){
			if($(this).attr('able') != undefined){
				$('#' + $(this).attr('able')).addClass('disabled');
			}
		});

		if($(this).attr('able') != undefined){
			$('#' + $(this).attr('able')).removeClass('disabled');
		}
	});
});