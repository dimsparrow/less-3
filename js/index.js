var Homepage = {
	init: function(){
		this.bxslider();
	},
	bxslider: (function(){
		$('.bxslider').bxSlider();
	})
}


$(window).on('load', function(){
	Homepage.init();
});


