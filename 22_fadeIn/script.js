$(function (){
    //jqueryを記述
    // デフォルト(引数なし)
    // $("p").fadeIn();

    // 速度指定(引数なし)
    // $("p").fadeIn(4000);

    // 終了後の処理
    $("p").fadeIn(3000,function() {
        $(this).css("color","#FF0000")
    });
});