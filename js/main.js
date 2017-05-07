$(document).ready(function(){
	  // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
	
	 $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
		

         $(".navbar-toggle").on("click", function () {
             $(this).toggleClass("active");
         });

		 

		    




		        $('#testimonials-carousel').owlCarousel({
		            loop: true,
					nav:true,
					navText:[ "<i class='fa fa-arrow-left fa-4'></i>", "<i class='fa fa-arrow-right fa-4'></i>"],
		            center: true,
		            items: 1,
		            margin: 0,
		            autoplay: true,
		            dots:true,
					pagination: true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 1
		              },
		              1170: {
		                items: 1
		              }
		            }
		        });
        	
		     $('#team-carousel').owlCarousel({
		            loop: true,
					nav:true,
					navText:[ "<i class='fa fa-arrow-left fa-4'></i>", "<i class='fa fa-arrow-right fa-4'></i>"],
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:false,
					pagination: false,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 3
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
				
		$(".owl-carousel").owlCarousel();	 
		 
});

      