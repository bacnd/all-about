$(function () {
    'use strict';

    // click show menu
    $('#navLine').click(function () {
        $(this).toggleClass('active');
        $('.hd-menu').toggleClass('nav-active');
        $('body').toggleClass('show-menu');
    });

    $('.btn-accept').click(function (e) {
        $('.noti-cookies').hide();
    });

    var $area = $('area');

    if ($area[0]) {
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
                // $area
                $('.area')
                    .mouseover(function () {
                        $area.filter('[data-area="' + $(this).data('area') + '"]').trigger('mouseover');
                        $(this).removeClass('hover');
                    })
                    .mouseout(function () {
                        $area.trigger('mouseout');
                    });
                $area
                    .mouseenter(function () {
                        $('.area')
                            .filter('[data-area="' + $(this).data('area') + '"]')
                            .addClass('hover');
                    })
                    .mouseleave(function () {
                        $('.area').removeClass('hover');
                    });

                $('.area, area').click(function () {
                    $area.trigger('mouseout');
                });

                var userAgent, ieReg, ie;
                userAgent = window.navigator.userAgent;
                ieReg = /msie|Trident.*rv[ :]*11\./gi;
                ie = ieReg.test(userAgent);

                if (ie) {
                    $('.grid .category').each(function () {
                        var $container = $(this),
                            imgUrl = $container.find('img.dl-pc').prop('src');
                        if (imgUrl) {
                            $container.css('backgroundImage', 'url(' + imgUrl + ')').addClass('custom-object-fit');
                        }
                    });
                }
            }
        });
    }

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
        $(this).find('span').text() == 'See More' ? $(this).find('span').text('Close') : $(this).find('span').text('See More');
    });

    $('.schedule__more-info').click(function () {
        $(this).toggleClass('show');
        $(this).parent().toggleClass('show');
        $(this).parent().find('.location__contact').slideToggle();
    });

    $('.has-submenu .menu-toggle').on('click', function (e) {
        e.preventDefault();
        $('.sub-menu').not($(this).next()).removeClass('active');
        $(this).next().toggleClass('active');
    }),
        $(document).on('click', function (e) {
            if (!$(e.target).hasClass('menu-toggle')) {
                $('.sub-menu.active').removeClass('active');
            }
        });
});
