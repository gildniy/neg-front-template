/*
 * Navigation specific javascript scripts
 */

var $window = $(window),
    $nav = $('#main-nav'),
    $logo = $('.navbar-brand.logo'),
    $header_menu = $('.main-nav'),
    $search = $('#search'),
    $num = 75,//number of pixels before modifying styles
    $search_box = $('.search_box'),
    $nav_items = $('#main-nav > div:nth-child(1) > div.menu.navbar-collapse' + '.collapse > ul');

if ($header_menu.hasClass('active')) {
    $('.main-nav.active').css('padding-top', '75px');
}
$search.click(function (e) {
    e.preventDefault();
    $search_box.toggleClass('active');
});

$window.bind('scroll', function () {
    if ($window.scrollTop() > $num) {
        $nav.addClass('smallnav');
        $nav.addClass('navbar-fixed-top');
        $logo.addClass('shown');
        $logo.removeClass('hidden');
        $logo.removeClass('margin-logo');
        $nav_items.removeClass('navbar-margin');
    } else {
        $nav.removeClass('smallnav');
        $nav.removeClass('navbar-fixed-top');
        $logo.removeClass('shown');
        $logo.addClass('hidden');
        $logo.addClass('margin-logo');
        $nav_items.addClass('navbar-margin');
    }
});