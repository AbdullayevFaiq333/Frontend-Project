$(document).ready(function() {
    $(".owl-carousel").owlCarousel({

        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
    $(".my-next-button").click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
    });

    $(".my-previous-button").click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });


    $(".gallery-2").fancybox({
        transitionIn: "elastic",
        transitionEffect: "fade",
        transitionOut: "elastic",
        speedIn: 600,
        speedOut: 200,
        overlayShow: true,
        opacity: true,
        cyclic: true,
    });

    $.fancybox.defaults.buttons = ["zoom", "slideShow", "close"];




});