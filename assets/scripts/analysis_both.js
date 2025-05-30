$(function () {
    $(".collapsible").on("click", function () {
        $(this).toggleClass("open"); // Toggle the 'open' class
        $(this).find(".collapsibleContent").slideToggle(); // Toggle visibility
    });
});