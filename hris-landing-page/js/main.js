var dropMenu = $('.drop__container');
var menuBurger = $(".nav__toggle");
var dropItems = $(".drop-items");
var check = 1;

menuBurger.click(function() {
    if(check === 1) {
        dropMenu.css("top", "4rem");
        check++;
    } else {
        dropMenu.css("top", "-100%");
        check--;
    }
});

dropItems.click(function() {
    dropMenu.css("top", "-100%");
    check--;
});