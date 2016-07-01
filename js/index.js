var Homepage = {
	init: function(){
		this.mainSlider();
		this.bxslider();
	},
	mainSlider: function(){
		$('.multiple-slide').slick({

		});
	},
	bxslider: function(){
		$('.bxslider').bxSlider({

		});
	}
};


$(window).on('load', function(){
	Homepage.init();
});

