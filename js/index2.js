/**
 * Created by Administrator on 2016/10/7 0007.
 */
$(function () {
    //首页加载项
    $(".loading .loading-line div").animate({"width":1349},5000,function(){
        $(".loading").css("display","none");
    });
    $(".loading .loading-cont-r div").animate({"width":576},5000);
    //鼠标下滑,背景发生移动
    $(window).scroll(function(){
        $(".bkg-topl").css("margin-left",-($(window).scrollTop()/3416)*$(".bkg-topl").width()+"px");
        $(".bkg-topr").css("margin-right",-($(window).scrollTop()/3416)*$(".bkg-topl").width()+"px");
        $(".bkg-botl").css("margin-left",-($(window).scrollTop()/3416)*$(".bkg-botl").width()+"px");
        $(".bkg-botr").css("margin-right",-($(window).scrollTop()/3416)*$(".bkg-botr").width()+"px");
        $(".bkg-cenr").css("margin-right",-($(window).scrollTop()/3416)*$(".bkg-cenr").width()+"px");
        $(".bkg-b").css("margin-top",-($(window).scrollTop()/3416)*$(".bkg-b").height()+"px");
        if($(window).scrollTop()>55){
            $(".bkg-topl").css("position","fixed");
            $(".bkg-topr").css("position","fixed");
        }else{
            $(".bkg-topl").css("position","absolute");
            $(".bkg-topr").css("position","absolute");
        }
    })
    //主体内容
    var timeid;
    $(".content-t a,.content-b a").mouseenter(function () {
        //var that = $(this);
        //timeid=setInterval(function (){
        //    that.stop().animate({
        //        top:-15,
        //    },200,function(){
        //        that.stop().animate({
        //            top:0,
        //        },200);
        //    });
        //},500);
        $(this).stop().animate({
            top:-15
        });

    });
    $(".content-t a,.content-b a ").mouseleave(function () {
        $(this).stop().animate({
            top:0
        });
    });


    //activity活动部分,当鼠标滑入的时候,图片变大,同时出现边框,鼠标移除,恢复初始.
    $(".activity .act-main a").on("mouseenter", function () {
        $(this).children("div").children("img").animate({"height": 165, "left": -10, "top": -10});
        $(this).find(".bordertop").animate({"width":300},200,function () {
            $(this).next().animate({"height":130},200,function () {
                $(this).next().animate({"width":300},200,function () {
                    $(this).next().animate({"height":130},200,function () {
                    });
                });
            });
        });
    });
    $(".activity .act-main a").on("mouseleave", function () {
        $(this).find(".bordertop").stop();//当鼠标离开的时候,停止动画执行
        $(this).find(".borderbott").stop();
        $(this).find(".borderleft").stop();
        $(this).find(".borderright").stop();
        $(this).find(".border div").css({"width":0,"height":0});
        $(this).children("div").children("img").animate({"height": 150, "left": 0, "top": 0});

    });
    //游戏部分.旋转木马

    var position = [
        {
            "width": 720,
            "height": 520,
            "top": -50,
            "left": 140,
            "opacity": 1,
            "zIndex": 4
        },
        {
            "width": 377,
            "height": 296,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },
        {
            "width": 432,
            "height": 312,
            "top": 50,
            "left": 550,
            "opacity": 0,
            "zIndex": 2
        },
        {

            "width": 432,
            "height": 312,
            "top": 50,
            "left": 50,
            "opacity": 0,
            "zIndex": 2
        },
        {
            "width": 377,
            "height": 296,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },
    ];
    assign();
    function assign() {
        for (i = 0; i < position.length; i++) {
            $(".game ul li").eq(i).animate(position[i], function () {
            });
        }
    }
    var flag = false;
    $(".game ul li").click(function () {
        $(".game ul li .game-border").find("div").hide(function(){return flag=true});
        if ($(this).css("left") == "0px") {
            position.push(position.shift());
            assign();
            addborder($(this));
        }
        if ($(this).css("left") == "600px") {
            position.unshift(position.pop());
            assign();
            addborder($(this));
        }
    });
    //为最前面的图片添加边框
    function addborder(ele) {
        var border = $("<div></div>")
        border.addClass("game-border");
        var borders = $(".border").eq(0).children().clone();
        border.append(borders);
        ele.append(border);
        ele.find(".bordertop").animate({"width":700},200,function () {
            $(this).next().animate({"height":500},200,function () {
                $(this).next().animate({"width":700},200,function () {
                    $(this).next().animate({"height":500},200,function () {
                    });
                });
            });
        });
    }
    //计算间隔时间
    function ms(){
        var nowtime=+new Date();
        var ftime=+new Date("2016/10/12 14:23:00");
        var seconds=parseInt((ftime-nowtime)/1000);
        var d=parseInt(seconds/3600/24);
        var h=parseInt(seconds/3600%24);
        var m=parseInt(seconds/60%60);
        var s=parseInt(seconds%60);
        m=m<10?m="0"+m:m;
        d=d<10?d="0"+d:d;
        h=h<10?h="0"+h:h;
        s=s<10?s="0"+s:s;
        if(d+h+m+s==0){
            clearInterval(num);
        }
    }
    setInterval(ms,1000);

})
