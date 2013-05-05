var origBorderWidth = parseInt($('.inset').css('border-top-width'));

function set3D() {
    $('.inset').each(function() {
        var self = $(this),
            windowHeight = $(window).height(),
            scrollHeight = $(window).scrollTop(),
            elementPosition = self.position(),
            positionPercentTop = Math.round((elementPosition.top - scrollHeight) / windowHeight * 100),
            positionPercentBottom = Math.round((elementPosition.top + self.outerHeight() - scrollHeight) / windowHeight * 100);

        self.css({
            'border-top-width' : origBorderWidth - (origBorderWidth * (positionPercentTop / 100)) + 'px',
            'border-bottom-width' : origBorderWidth * (positionPercentBottom / 100) + 'px'
        });
    });
};

set3D();

$(window).on('scroll', function() {
    set3D();
});




