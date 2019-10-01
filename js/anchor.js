// <![CDATA[
$(document).ready(function() {
	function filterPath(string) {
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}
	$('.anchor').each(function() {
		if ($(this).attr('anchor') != undefined && $(this).attr('anchor') != '') {
			var $targetId = $(this).attr('anchor');
			$targetId = $targetId.indexOf("#") != -1 ? $targetId : '#' + $targetId;
			var $target = $targetId.length ? $targetId : false;
			if ($target) {
				var targetOffset = $($target).offset().top;
				var wHeight = $(window).height();
				var tHeight = $($target).height();
				targetOffset = tHeight < wHeight ? Math.floor(targetOffset - ((wHeight - tHeight) / 2)) < 0 ? 0 : Math.floor(targetOffset - ((wHeight - tHeight) / 2)) : targetOffset;
				$(this).click(function() {
					$('html, body').animate({scrollTop: targetOffset}, 600);
					return false;
				});
			}
		}
	});
});