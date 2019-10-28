$(document).ready(function(){

	// Includes of common HTML parts

	var includeHTML = function(attribute) {
		var z, i, elmnt, xhttp;
		var head, header, nav, footer;
		var tag = attribute;
		/* Loop through a collection of all HTML elements: */
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) {
		  elmnt = z[i];
		  /*search for elements with a certain atrribute:*/
		  file = elmnt.getAttribute(attribute);
		  if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			  if (this.readyState == 4) {
				if (this.status == 200) {elmnt.innerHTML = this.responseText;}
				if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
				/* Remove the attribute, and call this function once more: */
				elmnt.removeAttribute("file");

				includeHTML();
			  }
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		  }
		}
	  }

	  includeHTML("include-head");
	  includeHTML("include-nav");
	  includeHTML("include-footer");


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

