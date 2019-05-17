$(function() { // DOM Ready
    // Insert all scripts here

    $('nav ul li > a:not(:only-child)').click(function(e) {
        if ($(document).width() >= 480 && $(document).width() <= 900){
            $('.nav-dropdown').toggleClass('tablet-nav');
        }else
            $(this).siblings('.nav-dropdown').toggle();

    //Prevent other nav-dropdowns from opening when one is clicked
    $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
    });

    //this makes the menu hide again if someone clicks outside of the nav(ie on the html)
    $('html').click(function() {
        $('.nav-dropdown').hide();
    });

    //toggles the mobile X and hamburger
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });

    $('#nav-toggle').click(function() {
        $('nav ul').toggle();
    });

});