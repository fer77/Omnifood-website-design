$(document).ready(function() {
    /* Sticky Nav */
    /* var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
}) */
    $('.js-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
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
    /* Nav Scroll */
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
});
