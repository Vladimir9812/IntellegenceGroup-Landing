$(function() {
    //карусель отзывов
    $('.js-reviews-carousel').slick({
        dots: true, 
        arrows: true, 
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        // responsive: [
        //     {
        //       breakpoint: 1000,
        //       settings: {
        //         arrows: false,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //       }
        //     }
        // ]
    });

    //плавный скролл по анкору
    $('.js-scroll-link').on('click', function(evt) {
        evt.preventDefault();
        //имя ссылки
        var anchorName = $(this).attr('href');
        //проверка, открыто ли мобменю
        if($('body').hasClass('is-mobmenu-open')) {
            $('body').removeClass('is-mobmenu-open');
        }
        //переход к анкору
        $('html, body').stop().animate({
            scrollTop: $(anchorName).offset().top
        }, 550, 'easeOutQuad');
    });

    //открытие мобменю
    $('.js-mobmenu-open').on('click', function() {
        $('body').addClass('is-mobmenu-open');
    });

    //закрытие мобменю
    $('.js-mobmenu-close').on('click', function() {
        $('body').removeClass('is-mobmenu-open');
    });
});