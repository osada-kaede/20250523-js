$(function (){
    //jqueryを記述
    $("button").click(function() {
        // $("div").animate( {"left":"600px"},10000);
        // 相対指定によるアニメーション
        $("div").animate({"left":"+=300"},500);
    });
});