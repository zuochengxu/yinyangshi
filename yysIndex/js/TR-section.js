/**
 * Created by Administrator on 2016/10/7.
 */
//动画
$(function () {
    // 1.动态设置i背景图片的轮换
    $(".tr-section .tr-tabs a>i").each(function (index,ele) {
        $(ele).css({"background-position":-index*155});
    })
    // 4. 默认选中第一个a
    $(".tr-section .tr-tabs a:eq(0)").children("span").css({top:0}).siblings("i").css({bottom:-20});
    // 2.给每个a注册鼠标移入事件
    // 标记上次位置的变量
    var lastIndex = 0;
    $(".tr-section .tr-tabs a").mouseenter(function () {
        // 5.1找到当前a的父级元素li的索引
        var index = $(this).parent().index();
        // 清除上一个思想设置动画效果
        $(".tr-section .tr-tabs a").eq(lastIndex).children("span").stop().animate({top:18},300);
        $(this).children("span").stop().animate({top:0},300);
        $(".tr-section .tr-tabs a").eq(lastIndex).children("i").stop().animate({bottom:-75},300);
        $(this).children("i").stop().animate({bottom:-20},300);
        lastIndex = $(this).parent().index();
        //5.section-con内容轮播效果
        $(".tr-section-con .con-1").stop().animate({left:-index*1220},200);
    })
    // 3.section-con内容效果
    $(".tr-section .tr-section-con ul a").mouseenter(function () {
        $(this).children("span").css("display","block");
    })
    $(".tr-section .tr-section-con ul a").mouseleave(function () {
        $(this).children("span").css("display","none");
    })
    // 6.video_pic-section图片动画效果
    $(".video_pic a").mouseenter(function () {
        $(this).children("img").stop().animate({width:288,height:164},200);
    })
    $(".video_pic a").mouseleave(function () {
        $(this).children("img").stop().animate({width:270,height:154},200);
    })
})