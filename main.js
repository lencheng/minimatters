$(".banner-left").slick({
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
        }
    }]
});
$(".banner-ph").slick({
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
        }
    }]
});
$(".new-in").slick({
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Previous</button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
});
$(".ins").slick({
    dots: false,
    arrows: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
});
$(".fea").slick({
    dots: false,
    arrows: true,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
});