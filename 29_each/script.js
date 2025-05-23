$(function (){
    //jqueryを記述
    $("li").each(function() {
        $(this).html("List" + $(this).index());
    });
});