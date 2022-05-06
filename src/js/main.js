//show-filter
$(".btn-filter").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".filter-area").toggleClass('show-filter');
});

//btn-menu
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-area").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});