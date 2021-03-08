$(document).ready(function() {
    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    $(".fancybox").fancybox({
        'width': 1000,
        'height': 550,
        'autoSize': false,
    });
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        center: true,

    });
});