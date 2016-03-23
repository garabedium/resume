//$(document).foundation();
$(document).ready(function() {

	// Animate header on scroll
	$(window).scroll(function(){

		// Set variables
		var header = $('header#nav'); //
		var headerHeight = header.outerHeight() + 25;

		if($(window).scrollTop() > headerHeight ){
			header.addClass('scroll');
		} else {
			header.removeClass('scroll');
		}
	});

	// Testing:
	//var footer = $('footer').outerHeight();
	//console.log(footer);

}); // end - doc ready