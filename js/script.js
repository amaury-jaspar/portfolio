$(document).ready(function(){

	$(function(){
		$("#nav-placeholder").load("./docs/en/nav.html");
	  });

	//Resizing of skills icons

	/**
	 *  This function resizes the font aweome icons depending on the window's width
	 */
	var iconResize = function() {
		var list = $("#skills .fab, #skills .fas")
		if ($(window).width() > 690) {
			$(list).removeClass('fa-2x');
			$(list).addClass('fa-3x');
		} else {
			if ($(window).width() < 500) {
				$(list).removeClass('fa-2x');
				$(list).addClass('fa-1x');
			} else {
				$(list).removeClass('fa-3x');
				$(list).addClass('fa-2x');
			}
		}
	}

	iconResize();

	$(window).resize(function() {
		iconResize();
	});

	// Sidenav
	$('.sidenav').sidenav();

	// ScrollSpy
	$('.scrollspy').scrollSpy();

	// Dropdown menus
	$('.modal').modal();
	$('.dropdown-trigger').dropdown({
		coverTrigger: false,
		constrainWidth: false
	});

	// Collapsible menu
	$('.collapsible').collapsible();

	//Tabs
	$('.tabs').tabs();

	// Sticky top navigation bar
	$(window).scroll(function() {
		if ($('#profile').is(":visible")) {
			if ($(window).scrollTop()>160) {
				$('nav').addClass('sticky-nav');
				$('#first-header').addClass('spaced-title');  // Adjustment to space out the first header from the top bar
			} else {
				$('nav').removeClass('sticky-nav');
				$('#first-header').removeClass('spaced-title');
			}
		} else {
			$('nav').addClass('sticky-nav');
			$('#first-header').addClass('spaced-title');
		}
	});

	
});

