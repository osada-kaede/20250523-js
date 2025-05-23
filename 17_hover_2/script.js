$(function (){
    //jqueryを記述
    $("a").hover(function(){
        $(this).css("coler","#00FF00");
    },function(){
        // $(this).css("coler","#0000ff");
        $(this).css("fontsize","24px");
        $(this).css("backgroundColor","red");
    });
});