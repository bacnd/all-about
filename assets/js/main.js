$(function () {
    'use strict';

    // click show menu
    $('#navLine').click(function () {
        $(this).toggleClass('active');
        $('.bottom-header').toggleClass('nav-active');
        $('body').toggleClass('show-menu');
    });

    $('.btn-accept').click(function (e) {
        $('.notification-cookies').hide();
    });

    $('#image-map').maphilight({
        stroke: false,
        fill: true,
        fillColor: 'dc000c',
        fillOpacity: 0.3,
    });

    var $area = $('area');

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
                .addClass('active');
        })
        .mouseleave(function () {
            $('.area')
                .filter('[data-area="' + $(this).data('area') + '"]')
                .removeClass('active');
        });

    $('map').imageMapResize();
});
