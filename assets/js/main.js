$(function () {
    'use strict';

    // click show menu
    $('#navLine').click(function () {
        $(this).toggleClass('active');
        $('.hd-menu').toggleClass('nav-active');
        $('body').toggleClass('show-menu');
    });

    $('.btn-accept').click(function (e) {
        $('.notification-cookies').hide();
    });

    var $area = $('area');

    $('map').imageMapResize();
    $(window).on('load', function (e) {
        const wWidth = $(window).width();
        if (wWidth > 768) {
            $('#image-map').maphilight({
                stroke: true,
                strokeColor: 'ffffff',
                fill: true,
                fillColor: 'DC000B',
                fillOpacity: 1,
            });
            $('.area')
                .mouseover(function () {
                    $area.filter('[data-area="' + $(this).data('area') + '"]').trigger('mouseover');
                })
                .mouseout(function () {
                    $area.filter('[data-area="' + $(this).data('area') + '"]').trigger('mouseout');
                });
            $area
                .mouseenter(function () {
                    $('.area')
                        .filter('[data-area="' + $(this).data('area') + '"]')
                        .addClass('hover');
                })
                .mouseleave(function () {
                    $('.area')
                        .filter('[data-area="' + $(this).data('area') + '"]')
                        .removeClass('hover');
                });
        } else {
            $('#image-map-sp').maphilight({
                stroke: true,
                strokeColor: 'ffffff',
                fill: true,
                fillColor: 'DC000B',
                fillOpacity: 1,
            });
            $('.area').click(function () {
                var $this = $(this);

                $area.trigger('mouseout');
                if ($this.hasClass('active')) {
                    $(this).removeClass('active');
                    $area.filter('[data-area="' + $(this).data('area') + '"]').trigger('mouseout');
                } else {
                    $('.area').removeClass('active');
                    $(this).addClass('active');
                    $area.filter('[data-area="' + $(this).data('area') + '"]').trigger('mouseover');
                }
            });
        }
    });

    $('.accordion-toggle').click(function (e) {
        var $this = $(this);
        if ($this.hasClass('show')) {
            $this.removeClass('show');
            $('.middle-ft__inner, .orther-pages').slideUp(350);
        } else {
            $this.toggleClass('show');
            $('.middle-ft__inner, .orther-pages').slideToggle(350);
        }
    });

    $('.gallery__see-more').click(function () {
        $(this).toggleClass('show');
        $(this).parent().toggleClass('show');
    });
});
