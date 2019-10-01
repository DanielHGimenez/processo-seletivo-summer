$(document).ready(function(e){
	$('.roda-left').click(function(){
		var n = $('#clinico .medicos').attr('m');
		var i = 0;
		if(n == '1'){
			$('#clinico .medicos').removeClass('one');
			$('#clinico .medicos').addClass('three');
			$('#clinico .medicos').attr('m', '3');
			var i = 2;
		} else if(n == '2') {
			$('#clinico .medicos').removeClass('two');
			$('#clinico .medicos').addClass('one');
			$('#clinico .medicos').attr('m', '1');
			var i = 0;
		} else {
			$('#clinico .medicos').removeClass('three');
			$('#clinico .medicos').addClass('two');
			$('#clinico .medicos').attr('m', '2');
			var i = 1;
		}
		$('#clinico .info').each(function(index){
			if(!$(this).hasClass('disabled')){
				$(this).addClass('disabled');
			}
			if(index == i) {
				$(this).removeClass('disabled');
			}
		});
	});
	$('.roda-right').click(function(){
		var n = $('#clinico .medicos').attr('m');
		var i = 0;
		if(n == '1'){
			$('#clinico .medicos').removeClass('one');
			$('#clinico .medicos').addClass('two');
			$('#clinico .medicos').attr('m', '2');
			var i = 1;
		} else if(n == '2') {
			$('#clinico .medicos').removeClass('two');
			$('#clinico .medicos').addClass('three');
			$('#clinico .medicos').attr('m', '3');
			var i = 2;
		} else {
			$('#clinico .medicos').removeClass('three');
			$('#clinico .medicos').addClass('one');
			$('#clinico .medicos').attr('m', '1');
			var i = 0;
		}
		$('#clinico .info').each(function(index){
			if(!$(this).hasClass('disabled')){
				$(this).addClass('disabled');
			}
			if(index == i) {
				$(this).removeClass('disabled');
			}
		});
	});
});