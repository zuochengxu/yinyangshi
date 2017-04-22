$(function () {
    $(".strategy_tabs").children("a").click(function () {
        var index=$(this).index()/2-1;
        var preIndex=$(this).siblings(".active").index()/2-1;
        var lastIndex=$(".strategy_tabs").children("a").length-1;

        //改变tab和list的内容
        $(this).addClass("active").siblings(".active").removeClass("active");
        $(".strategy_list ul").eq(index).addClass("show").siblings(".show").removeClass("show");

        //如果点击的不是更多,让前一个的动画停止,当前list盒子中所有li元素上移到-270px,
        //准备使用动画下落
        if(index<lastIndex){
            var preChildren=$(".strategy_list ul").eq(preIndex).children();
            preChildren.stop();
            var children=$(".strategy_list ul").eq(index).children();
                children.each(function (index,ele) {
                    $(ele).css({"top": -$(this).height(),"opacity":0});
                });

            //设置定时器和index,每隔100毫秒让一个li元素开始下落
            var index=0;
            var downTimerId=setInterval(function () {
                children.eq(index++).animate({"top":0,"opacity":1},450);
                if(index>children.length-1){
                    clearInterval(downTimerId);
                }
            },100);
        }
    });
    //监听窗口滚动,滚动后1秒钟,将tabs和list定在"更多"栏上
    $(window).scroll(function () {
        var now=$(".strategy_tabs").children(".active").index()/2-1;
        var last=$(".strategy_tabs a").length-1;
        if(now!=last){
            setTimeout(function () {
                $(".strategy_tabs").children("a").eq(last).addClass("active").siblings(".active").removeClass("active");
                $(".strategy_list ul").eq(last).addClass("show").siblings(".show").removeClass("show");
            },1000);
        }
        
    });
});
