$(document).ready(function() {
	//$('.instructions').hide();
	//$('.title-screen').hide();
	//$('.title-screen').fadeIn(function(){
	//$('title-screen').fadeIn();
	//	)};
	$('.ryu').mouseenter(function() {
		$('.ryu div').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu div').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu div').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu div').hide();
		$('.ryu-ready').show();
	});


	$('body').keydown(function(e) {
		if (e.which === 88) {
			$('.ryu div').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e) {
		if (e.which === 88) {
			$('.ryu div').hide();
			$('.ryu-still').show();
		}
	});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
	}


});