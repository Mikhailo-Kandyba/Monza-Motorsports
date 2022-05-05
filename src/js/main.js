$(".btn-filter").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".filter-area").toggleClass('show-filter');
});