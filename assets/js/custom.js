(function($) { 
"use strict"; 
/*----------------------------------------------------*/
/* Preloader
------------------------------------------------------ */
   $(window).on('load', function() {
       // will first fade out the loading animation
       $(".preloader").fadeOut();
       //then background color will fade out slowly
       $("#preloader").delay(500).fadeOut("slow");
   });

 /*----------------------------------------------------*/
 /* Progress Bar Of My Skills
 ------------------------------------------------------ */
$(function () {
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});
$( window ).scroll(function() {
  if($( window ).scrollTop() > 150){
  $(".progress-bar").each(function(){
   var each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
   }
});

/*----------------------------------------------------*/
/* Filter taps My Portfolio
------------------------------------------------------ */
$(document).ready(function(){
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    if(value == "all")
    {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    }
    else
    {
        //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
        // $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
    }
    });
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
        }
        $(this).addClass("active");
});

/*----------------------------------------------------*/
/* Carousel Testimonials
------------------------------------------------------ */
$('.testimonials-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        margin:10
});

/*----------------------------------------------------*/
/* Scroll to Top
------------------------------------------------------ */
$(window).scroll(function() {
    if ($(this).scrollTop() >= 700) {    // If page is scrolled more than 50px
        $('#top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#top').fadeOut("fast");      // Else fade out the arrow
    }
});
$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 900);
});
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 300) {
        $('.navbar-default').addClass('flixed-nav');
    } else {
      $('.navbar-default').removeClass('flixed-nav');
    }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */
jQuery(document).ready(function($) {
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    },1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

/*----------------------------------------------------*/
/* Add Class Active
------------------------------------------------------ */
$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');

			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top < scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
		});
	}

})(jQuery);