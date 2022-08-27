$(document).ready(function() {
    $('.filterItem').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.articleCard').show('5000');
        } else {
            $('.articleCard').not('.' + value).hide('1000');
            $('.articleCard').filter('.' + value).show('1000');
        }
    });
    $(".filterItem").click(function() {
        $(this).addClass("activeFilter").siblings().removeClass("activeFilter");
    })
});