$(function () {
    $(".strategy_tabs").children("a").click(function () {
        var index=$(this).index()/2-1;
        var preIndex=$(this).siblings(".active").index()/2-1;
        var lastIndex=$(".strategy_tabs").children("a").length-1;

        //�ı�tab��list������
        $(this).addClass("active").siblings(".active").removeClass("active");
        $(".strategy_list ul").eq(index).addClass("show").siblings(".show").removeClass("show");

        //�������Ĳ��Ǹ���,��ǰһ���Ķ���ֹͣ,��ǰlist����������liԪ�����Ƶ�-270px,
        //׼��ʹ�ö�������
        if(index<lastIndex){
            var preChildren=$(".strategy_list ul").eq(preIndex).children();
            preChildren.stop();
            var children=$(".strategy_list ul").eq(index).children();
                children.each(function (index,ele) {
                    $(ele).css({"top": -$(this).height(),"opacity":0});
                });

            //���ö�ʱ����index,ÿ��100������һ��liԪ�ؿ�ʼ����
            var index=0;
            var downTimerId=setInterval(function () {
                children.eq(index++).animate({"top":0,"opacity":1},450);
                if(index>children.length-1){
                    clearInterval(downTimerId);
                }
            },100);
        }
    });
    //�������ڹ���,������1����,��tabs��list����"����"����
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
