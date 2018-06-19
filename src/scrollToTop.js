(function ($) {

    $.fn.scrollToTop = function (options) {

        var settings = $.extend({
            top: 0,
            speed: 1000
        }, options);

        this.click(function () {

            event.preventDefault();

            $('html, body').animate({

                scrollTop: settings.top

            }, settings.speed);

        });

    };

}(jQuery));