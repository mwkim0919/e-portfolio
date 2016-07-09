$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 500);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});

// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
	console = {
		log: function() { }
	};
}

$(function() {
	$(window).scroll( function(){
		$('.scrollfade').each( function(i){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
			bottom_of_window = bottom_of_window + 200;  

			if( bottom_of_window > bottom_of_object ){
				$(this).animate({'opacity':'1'},500);
			}
		}); 
	});
});