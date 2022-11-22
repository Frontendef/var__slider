$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		autoplay:true,
		speed:5000,
		autoplaySpeed:300,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});


$(document).ready(function(){
	$('.slider__2').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		autoplay:true,
		speed:1200,
		autoplaySpeed:700,
		asNavFor: '.slider__3',
		vertical: false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});


$(document).ready(function(){
	$('.slider__3').slick({
		arrows:false,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:1200,
		autoplaySpeed:700,
		fade:true,
		asNavFor: '.slider__2',
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});