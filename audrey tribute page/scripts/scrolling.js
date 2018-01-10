$().ready(function() {
		var $scrollingDiv = $("#scrollingDiv");

		$(window).scroll(function(){
			$scrollingDiv
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 10) + "px"}, "slow" );
		});
	});
