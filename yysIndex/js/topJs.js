/**
 * Created by 痴痴 on 2016/10/7.
 */
//顶部头的入口函数
$(function () {
    //鼠标移入变色
    $(".r-topHeader ul li.changeBg").on("mouseenter", function () {
            var $cloneA = $(this).children().clone().addClass("aHover").stop().animate({"height":0},0).animate({"height":"55px"},200);;
            $(this).prepend($cloneA);
    });
    //鼠标移除褪色
    $(".r-topHeader ul li.changeBg").on("mouseleave",function () {
        var $cloneA = $(".r-topHeader ul li a.aHover");
        $cloneA.stop().animate({"height":0},150,function () {
            $cloneA.remove();
        });
    });

    //最后一个li定时转换内容;
    var a4Text = ["网易秀品商城","安卓充值9.8折","网易严选大牌直供"];
    var textIndex = 0;
    var timerId = setInterval(changeText,2500);//开启定时器;
    function changeText(){
        $(".r-topHeader ul li a.a4").stop().animate({"margin-top":"-55px","opacity":0},400,"linear", function () {
            $(".r-topHeader ul li a.a4").stop().animate({"margin-top":"55px","opacity":0},0, function () {
                textIndex = textIndex == a4Text.length-1? 0: textIndex+1;
                $(".r-topHeader ul li a.a4").text(a4Text[textIndex]);
                $(".r-topHeader ul li a.a4").stop().animate({"margin-top":0,"opacity":1},400,"linear");
            })
        });
    }

    //鼠标移入开启定时器
    $(".r-topHeader ul li:eq(3)").on("mouseenter", function () {
        clearInterval(timerId);
    })
    //鼠标移出开启定时器
    $(".r-topHeader ul li:eq(3)").on("mouseleave", function () {
        timerId = setInterval(changeText,2500);//开启定时器;
    })
    //鼠标移入li下的a3时显示allGame
    $(".r-topHeader ul li:eq(2)").on("mouseenter", function () {
        $(".topHeader .allGame").stop().slideDown();
        $(this).css("background","#BBD5CA");
    });
    //鼠标移出li下的a3时隐藏allGame
    $(".r-topHeader ul li:eq(2)").on("mouseleave", function () {
        $(".topHeader .allGame").stop().hide();
        $(this).css("background","");
    })

    //制造刮刮乐显示阴阳师的效果
    //动态创建小方块
    var $height = $("#m-topHeader").height();
    var $width =  $("#m-topHeader").width();

    var num =  parseInt($width/10)*parseInt($height/10);
    var ul = document.getElementById("ul-topHeader");

    function changeColor(obj){
        var ran1 = Math.floor(Math.random()*255);
        var ran2 = Math.floor(Math.random()*255);
        var ran3 = Math.floor(Math.random()*255);
        obj.style.backgroundColor = "rgb("+ran1+","+ran2+","+ran3+")";
    }

    for (var i = 0; i < num; i++) {
        var li  = document.createElement("li");
        ul.appendChild(li);
        li.onmouseover = function () {
            changeColor(this);
            $(this).stop().animate({opacity:1},0).animate({opacity:0},1000);
    }}

    //阴阳师透明遮罩效果
    var $height2 = $("#m-topHeader .top-yys").height();
    var $width2 =  $("#m-topHeader .top-yys").width();

    var num2 =  Math.floor($width2/10)*Math.floor($height2/10);
    console.log(num2);
    //动态创建遮罩的li
    for (var i = 0; i < num2; i++) {
        var $li = $("<li></li>");
        $("#m-topHeader .top-yys ul").append($li);
        $li[0].num = 10;
        $li.on("mouseenter", function () {
            var count = $(this)[0].num == 0?0:--$(this)[0].num;
            console.log($(this)[0].num);
            $(this).stop().animate({opacity:count/10},0);
        })
    }

    //点击阴阳师弹出遮罩效果
    $("#m-topHeader .top-yys").on("click", function () {
        $("#bigBg").stop().animate({width:"100%"},500);
        $("#bigBg>img").stop().animate({width:"1492"},500);
        $("#closeBigBg").stop().show();
    })
    $("#closeBigBg").on("click", function () {
        $("#bigBg").stop().animate({width:"0"},500);
        $("#bigBg>img").stop().animate({width:"0"},500);
        $("#closeBigBg").stop().hide();
    })
    var timerId;
    $("#closeBigBg").on("mouseenter", function () {
        clearInterval(timerId);
        var count = 0;
        timerId = setInterval(function () {
            count++;
            if(count<15){
                $("#closeBigBg").stop().animate({marginLeft:"592px"},20, function () {
                    $("#closeBigBg").stop().animate({marginLeft:"602px"},20);
                });
            }else {
                clearInterval(timerId);
                $("#closeBigBg").stop().css("marginLeft","597px");
            }
        },60);
    })
});

//top_bar部分的特效
$(function () {
    //页面滚动时top_bar顶部导航栏固定
    $(window).on("scroll", function () {
        //console.log($(".topHeader").height());
        if($(window).scrollTop()>$(".topHeader").height()){
            $("#top_bar").addClass("fixedBar");
            $("#top_bar .left_part").stop().show();
            $(".main_banner .logo img").stop().hide(400);
        }else{
            $("#top_bar").removeClass("fixedBar");
            $("#top_bar .left_part").stop().hide();
            $(".main_banner .logo img").stop().show(400);
        }
    })

    //鼠标移入topnav_list 下的最后两个li时触发盒子显示和改bg透明度
    var $tl4 = $(".topnav_list li:eq(4)");
    var $tl5 = $(".topnav_list li:eq(5)");
    var $tml = $("#top_bar .top_more_l");
    var $tmr = $("#top_bar .top_more_r");
    $(".topnav_list li:eq(4),#top_bar .top_more_l").on("mouseenter", function () {
        $tl4.children("em").stop().show();
        $tml.stop().slideDown(500);
        $("#top_bar").css("background-color","rgba(255,255,255,0.8)");
    })
    $(".topnav_list li:eq(5),#top_bar .top_more_r").on("mouseenter", function () {
        $tl5.children("em").stop().show();
        $tmr.stop().slideDown(500);
        $("#top_bar").css("background-color","rgba(255,255,255,0.8)");
    })
    //鼠标移出就隐藏
    $(".topnav_list li:eq(4),#top_bar .top_more_l").on("mouseleave", function () {
        $tl4.children("em").stop().hide();
        $tml.stop().slideUp(200);
        $("#top_bar").css("background-color","");
    });
    $(".topnav_list li:eq(5),#top_bar .top_more_r").on("mouseleave", function () {
        $tl5.children("em").stop().hide();
        $tmr.stop().slideUp(200);
        $("#top_bar").css("background-color","");
    })

    //设置top_more a里的span盒子悬停浮动效果
    $(".top_more_l a span,.top_more_r a span").on("mouseenter", function () {
        $(this).stop().animate({
            marginTop: "-15px"
        },200);
    });
    $(".top_more_l a span,.top_more_r a span").on("mouseleave", function () {
        $(this).stop().animate({
            marginTop: "0"
        },300);
    });

})

//main_banne部分的特效
$(function () {
    //封装一个载入时的动画
    function firstAnimate(){
        $(".qingming").stop().animate({
            top:"40px",
            opacity:1
        },1500);
        $(".shenle").stop().animate({
            top: "0",
            opacity:1
        },1000);
        $(".slogan").stop().animate({
            top:"65px",
            opacity:1
        },1500);
        $(".logo").stop().animate({
            left:"50px",
            opacity:1
        },2000);
    }
    //重新打乱为载入前的位置
    function playRan(){
        $(".qingming").stop().animate({
            top:"585px",
            opacity:0
        },0);
        $(".shenle").stop().animate({
            top: "585px",
            opacity:0
        },0);
        $(".slogan").stop().animate({
            top:"-450px",
            opacity:0
        },0);
        $(".logo").stop().animate({
            left:"-140px",
            opacity:0
        },0);
    }

    //点击阴阳师logo再次实现载入动画
    $(".main_banner .logo").on("click", function () {
        playRan();
        //setTimeout(firstAnimate,3);
        firstAnimate();
    });
    firstAnimate();
    
    //暴走头像特效部分
    $(".main_banner img.qingming-header,.main_banner img.shenle-header").on("mouseenter", function () {
        $(this).stop().fadeTo(3000,1,"linear");
    })
    $(".main_banner img.qingming-header,.main_banner img.shenle-header").on("mouseleave", function () {
        $(this).stop().fadeTo(1500,0);
    })
    //暴走大家族暴走
    $(".main_banner .open_game").on("click", function () {
        $(".main_banner>img").stop().fadeTo(1000,1,"linear");
    })
    $(".main_banner .open_game").on("mouseleave", function () {
        $(".main_banner>img").stop().fadeTo(2000,0,"linear");
        var dest = $(".main_banner").width()/2;
        $(this).stop().animate({marginLeft:dest+"px"},5000,function () {
            $(this).stop().animate({marginLeft:-dest-135+"px"},0, function () {
                $(this).stop().animate({marginLeft:-535+"px"},2500);
            });
        });
    });
})


