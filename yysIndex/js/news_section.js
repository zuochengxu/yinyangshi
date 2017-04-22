/**
 * Created by 39739 on 2016/10/7.
 */
//左侧轮播图
$(function () {
    //1 动态生成小圆圈
    for (var i = 0; i < $("#banner ul li").length; i++) {
        var li = $("<li></li>");
        $("#banner ol").append(li);
    }
    var index=0;
    $("#banner ol li").eq(0).addClass("on");
    //2 设置鼠标滑过小圆点时的样式
    $("#banner ol li").mouseenter(function(){
        $(this).addClass("on").siblings().removeClass("on");
        index=$(this).index();
        $("#banner ul").stop().animate({
            left:-index*360
        },500,"swing");
    });
    var timerId=null;
    timerId=setInterval(function(){
        if(index==$("#banner ul li").length){
            $("#banner ul").animate({
                left:0
            },500,"swing");
            index=0;
        }
        $("#banner ul").animate({
            left:-index*360
        },500,"swing");
        $("#banner ol li").eq(index).addClass("on").siblings().removeClass("on");
        index++;
    },2000);

    $("#banner").mouseenter(function(){
        clearInterval(timerId);
    });
    $("#banner").mouseleave(function(){
        timerId=setInterval(function(){
            if(index==$("#banner ul li").length){
                $("#banner ul").animate({
                    left:0
                },500,"swing");
                index=0;
            }
            $("#banner ul").animate({
                left:-index*360
            },500,"swing");
            $("#banner ol li").eq(index).addClass("on").siblings().removeClass("on");
            index++;
        },2000)
    });
    $(".news_tabs a em").eq(0).css("opacity","1");
    $(".news_tabs a").mouseenter(function(){
        $(this).children("em").stop().animate({
            opacity:1,
            top:4
        },500).end().siblings().children("em").stop().animate({
            opacity:0,
            top:8
        },500);
        var index=$(this).index();
        $(".tempWrap .news_list").stop().animate({
            left:-index*500
        },500)
    });
});