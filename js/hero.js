

	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
				
			},
			768 : {
				items: 3,
			},
			991 : {
				items: 4,
			},
			1200 : {
				items: 5,
			},
			1400 : {
				items: 7,
			}
		}
	});