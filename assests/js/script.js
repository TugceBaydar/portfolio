/*global $, mixitup*/

// Preloader
$(window).on('load', function () {
    "use strict";

    $('.preloader').fadeOut('slow');

});

$(document).ready(function () {
    "use strict";

    var body = $('body, html'),
        home = $('header'),
        nav = $('nav'),
        links = $('nav .navbar-nav > li > a'),
        navMobile = $('.navbar .collapse'),
        toTop = $('.to_top'),
        toDown = $('header .to_down'),
        contactmebtn = $('header .header_content .contactme'),
        mixerContainer = $('#portfolio .works_content'),
        PopUp = $('.works .works_content .mix .work_item .item_caption .popup'),
        // portfolio (MIXITUP)
        mixer = mixitup(mixerContainer, {
            selectors: {
                control: '.works_control > button'
            }
        });

    // Links of Sections in the navbar
    links.on('click', function (event) {
        event.preventDefault();
        if ($(window).innerWidth() > 766) {
            body.animate({scrollTop: $($(this).data('link')).offset().top}, 500);
        } else {
            body.scrollTop($($(this).data('link')).offset().top);
            navMobile.removeClass('in');
        }
    });

    // to top button (1- on click)
    toTop.click(function () {
        body.animate({scrollTop : 0}, 500);
    });

    // link to contact me section
    contactmebtn.on('click', function (event) {
        event.preventDefault();
        body.animate({scrollTop: $('#contact').offset().top}, 900);
    });

    // to down button (in the header)
    toDown.on('click', function () {
        body.animate({scrollTop: home.innerHeight() + 1}, 600);
    });

    // the name in the header (typed.js)
    $(function () {
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            backDelay: 900,
            loop: true,
            loopCount: false,
            showCursor: false,
            cursorChar: "|",
            attr: null,
            contentType: 'html'
        });
    });

    // portfolio gallary (Magnific PopUp)

    PopUp.magnificPopup({
        type: 'image',
        disableOn: 400,
        key: 'some-key',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });

    $(window).on('scroll', function () {

        // Change the Properties of the navbar on scroll
        if ($(window).scrollTop() > 10) {
            nav.addClass('active');
        } else {
            nav.removeClass('active');
        }

        // Change the Properties of the links on scroll
        $('.section').each(function () {
            var id = $(this).attr('id'),
                target = $(this).offset().top;

            if ($(window).scrollTop() >= target - 1) {
                links.removeClass('current').blur();
                $('nav .navbar-nav > li > a[data-link="#' + id +  '"]').addClass('current');
            }
        });

        // to top button (2- hide and show)
        if ($(window).scrollTop() >= 500) {     // If page is scrolled more than 500px
            toTop.addClass('active');           // show button
        } else {
            toTop.removeClass('active');        // else hide the button
        }
    });

});

// MY Experience
(function () {
    'use strict';
    var items = document.querySelectorAll(".experience li");
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callbackFunc() {
        var i;
        for (i = 0; i < items.length; i += 1) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
}());
