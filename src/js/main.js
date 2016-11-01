$(function(){
	$('a[href ^= "#"]').click(function(a) {
        a.preventDefault();
    })

    $("#small-slider").owlCarousel({
    	items: 4,
    	margin: 30,
    	nav: false,
    	dots: true,
        loop: true,
        responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        1000:{
	            items:4,
	        }
	    }
    });

    $('.small-slider-prev').on('click', function() {
    	$('.small-slider').trigger('prev.owl.carousel');
    })
    $('.small-slider-next').on('click', function() {
    	$('.small-slider').trigger('next.owl.carousel');
    })

    $("#slider-main").owlCarousel({
    	items: 1,
    	margin: 00,
    	nav: false,
    	dots: true,
        loop: true,
    });

    $('.slider-main-prev').on('click', function() {
    	$('.slider-main').trigger('prev.owl.carousel');
    })
    $('.slider-main-next').on('click', function() {
    	$('.slider-main').trigger('next.owl.carousel');
    })
    //mobile 
    $(".mobile-menu").click(function(){
    	$(".navbar").show();
    });
    //position of small slider buttons
    // var smallSliderLeft = $(".small-slider .owl-dot").first().offset();
    // $('.small-slider-prev').css("left", smallSliderLeft.left);
    // var smallSliderRight = $(".small-slider .owl-dot").last().offset();
    // $('.small-slider-next').css("left", smallSliderRight.left);
})