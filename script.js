

$(document).ready(function () {
    //アニメーションスピード
    var scrollSpeed = 1;
    //動かす画像サイズ取得
    var imgWidth = $('body').css("samplebox", width);
    //画面の幅を取得
    var windowWidth = $(window).width();
    //画面の高さ取得
    var windowWidth = $(window).height();
    //画像の初期位置
    var posX = 0;
    //ループ処理
    setInterval(function(){
        //画像のサイズまで移動したら0に戻る。
        if (posX >= imgWidth) posX= 0;
        //scrollSpeed分移動
        posX += scrollSpeed;
        $('body').css("background-position",posX+"px 0px");
    }, 1);
});
