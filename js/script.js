$(document).ready(function(){
    // Sidenav
    $('.sidenav').sidenav();

    // ScrollSpy
    $('.scrollspy').scrollSpy();

    // Dropdown menus
    $('.modal').modal();
    $('.dropdown-trigger').dropdown({
        /*hover: true,*/
        coverTrigger: false,
        constrainWidth: false
    });

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