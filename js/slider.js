
if($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility: false,
		adaptiveHeight: true,
		slidesToShou:1,
		autoplaySpeed: 3000,
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}