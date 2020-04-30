$(document).ready(function(){
	$(".slider").slick({
		slidesToShow:2,
		responsive:[
			{
				breakpoint:768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});
})