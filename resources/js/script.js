$(document).ready(function() {
    /* Sticky Nav */
    /* var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
}) */
    $('.js-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky animated slideInDown');
        } else {
            $('nav').addClass('slideOutUp')
            setTimeout(function () {
                $('nav').removeClass('sticky animated slideInDown slideOutUp');
            }, 500);
        }
    }, {
        offset: '60px;'
    });
    /* Scroll on Buttons */
    $('.js-scroll-plans').click(function() {
        $('html, body').animate({ scrollTop: $('.js-plans').offset().top }, 2000);
    });

    $('.js-scroll-features').click(function() {
        $('html, body').animate({ scrollTop: $('.js-features').offset().top }, 1000);
    });
    /* Nav Scroll (got this off of CSS tricks) */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({ scrollTop: target.offset().top }, 1500);
                    return false;
                }
            }
        });
    });
    /* On Scroll Animation */
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });
    /* Mobile Nav */
    $('.js-hamburger-nav').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-hamburger-nav i');

        nav.slideToggle(250);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round').removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round').removeClass('ion-close-round');
        }
    });
    /* Map */
    var map = new GMaps({
        div: '.map',
        lat: 30.2837261,
        lng: -97.7303707,
        zoom: 15
    });
    map.addMarker({
        lat: 30.2838271,
        lng: -97.7504717,
        title: 'Austin',
        infoWindow: {
            content: '<p>Our newest location</p>'
        }
    });
});
