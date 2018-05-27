(function ($) {
    TopGap = $(window).scrollTop();
    scrollCount = 0;
    movement = 0;
    time = 300;
    pixels = 100;
    easing = "easeOutExpo";
    window.addEventListener("mousewheel", scrollWindow, false);
    window.addEventListener("DOMMouseScroll", scrollWindow, false);
    function scrollWindow(e) {
        e.preventDefault();
        TopGap = $(window).scrollTop();
        mouseDelta = e.wheelDelta || -e.detail;
        scrollCount++;
        if (mouseDelta > 0) {
            if (movement === 1) {
                scrollCount = 1;
            }
            movement = -1;
            $('body,html').stop().animate({
                scrollTop: TopGap - (pixels * scrollCount)
            }, time, easing, function () {
                movement = 0;
                scrollCount = 0;
            });
        }
        else if (mouseDelta < 0) {
            if (movement === -1) {
                scrollCount = 1;
            }
            movement = 1;
            $('body,html').stop().animate({
                scrollTop: TopGap + (pixels * scrollCount)
            }, time, easing, function () {
                movement = 0;
                scrollCount = 0;
            });
        }
    }
})(jQuery);
