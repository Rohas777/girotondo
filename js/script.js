function movePaginationToTop() {
    // Находим точки пагинации внутри .owl-carousel
    let pagination = $(".offer__slider.owl-carousel .owl-dots");

    // Проверяем, найдены ли точки пагинации
    if (pagination.length) {
        // Перемещаем точки пагинации в конец тела документа
        $(".offer .container").append(pagination);
    }
}

$(document).ready(function () {
    //Уменьшение хедера при скролле
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var header = $("header");
    
        if (scroll >= 100) {
            header.addClass("scrolled");
            $(".header__social").slideUp(300);
            $(".header__address").slideUp(300);
        } else {
            header.removeClass("scrolled");
            $(".header__social").slideDown(600);
            $(".header__address").slideDown(600);
        }
    });
    
    //Открытие доп меню при наведении в хедере
    
    $(".header__links .has-submenu").hover(function () {
        $(this).children(".submenu").slideToggle(200);
    });
    
    //Открытие доп меню по клику в бургере
    
    $(".header__burgermenu .has-submenu").click(function () {
        $(this).children(".submenu").slideToggle(200);
    });
    
    //Открытие бургера по клику
    
    $(".header__burger").click(function () {
        $(".header__burgermenu").slideToggle(300);
    });
    
    //Закрытие бургера при изменении размера окна
    
    $(window)
        .on("resize", function () {
            if ($(window).width() > 1170) {
                $(".header__burgermenu").slideUp(300);
            }
        })
        .resize();
    

    //Карусель в офферном блоке

    $(".offer__slider.owl-carousel").owlCarousel({
        items: 1, // Количество элементов в слайде
        loop: true, // Включение бесконечного цикла
        margin: 0, // Отступ между элементами
        autoplay: true, // Автоматическая прокрутка
        autoplayTimeout: 5000, // Время между автопрокруткой в миллисекундах
        nav: false, // Включение навигации
        dots: true, // Включение точек для перехода к слайду
        mouseDrag: true,
        touchDrag: true,
    });
    movePaginationToTop(); //Перемещение точек пагинации выше по иерархии DOM

    //Карусель в блоке "О нас"

    $(".about__slider.owl-carousel").owlCarousel({
        items: 1, // Количество элементов в слайде
        loop: true, // Включение бесконечного цикла
        margin: 50, // Отступ между элементами
        autoplay: true, // Автоматическая прокрутка
        autoplayTimeout: 5000, // Время между автопрокруткой в миллисекундах
        nav: false, // Включение навигации
        dots: false, // Включение точек для перехода к слайду
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 500,
    });

    //Карусель в блоке "События"

    $(".events__slider.owl-carousel").owlCarousel({
        loop: true, // Включение бесконечного цикла
        margin: 20, // Отступ между элементами
        autoplay: true, // Автоматическая прокрутка
        autoplayTimeout: 5000, // Время между автопрокруткой в миллисекундах
        nav: true, // Включение навигации
        navText: ["<", ">"],
        dots: false, // Включение точек для перехода к слайду
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            650: {
                items: 3,
            },
        },
    });

    //Увеличение второго слайда в блоке "События"

    $(window)
        .on("resize", function () {
            var windowWidth = $(window).width();

            if (windowWidth >= 650) {
                $(".events__slider .owl-item.active").eq(1).addClass("sized");
                $(".events__slider.owl-carousel").on(
                    "changed.owl.carousel",
                    function (event) {
                        $(".events__slider .owl-item").each(function (index) {
                            $(this).removeClass("sized");
                        });
                        $(".events__slider .owl-item")
                            .eq(event.item.index + 1)
                            .addClass("sized");
                    }
                );
            } else {
                $(".events__slider .owl-item").each(function (index) {
                    $(this).removeClass("sized");
                });
            }
        })
        .resize();

    $(".schedule__item").each(function (index) {
        let calcIndex = index % 12;

        switch (calcIndex) {
            case 0:
                $(this).children(".schedule__hour").addClass("orange");
                break;
            case 1:
                $(this).children(".schedule__hour").addClass("red");
                break;
            case 2:
                $(this).children(".schedule__hour").addClass("yellow");
                break;
            case 3:
                $(this).children(".schedule__hour").addClass("violet");
                break;
            case 4:
                $(this).children(".schedule__hour").addClass("green");
                break;
            case 5:
                $(this).children(".schedule__hour").addClass("blue");
                break;
            case 6:
                $(this).children(".schedule__hour").addClass("blue");
                break;
            case 7:
                $(this).children(".schedule__hour").addClass("green");
                break;
            case 8:
                $(this).children(".schedule__hour").addClass("violet");
                break;
            case 9:
                $(this).children(".schedule__hour").addClass("yellow");
                break;
            case 10:
                $(this).children(".schedule__hour").addClass("red");
                break;
            case 11:
                $(this).children(".schedule__hour").addClass("orange");
                break;
            default:
                console.log("none");
        }
    });
});
