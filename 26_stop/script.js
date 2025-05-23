$(function (){
    //jqueryを記述
    $("dt").hover(function() {
        $("dd").stop().slideToggle();
    });
});