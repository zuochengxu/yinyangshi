/**
 * Created by Administrator on 2016/10/7.
 */
//����
$(function () {
    // 1.��̬����i����ͼƬ���ֻ�
    $(".tr-section .tr-tabs a>i").each(function (index,ele) {
        $(ele).css({"background-position":-index*155});
    })
    // 4. Ĭ��ѡ�е�һ��a
    $(".tr-section .tr-tabs a:eq(0)").children("span").css({top:0}).siblings("i").css({bottom:-20});
    // 2.��ÿ��aע����������¼�
    // ����ϴ�λ�õı���
    var lastIndex = 0;
    $(".tr-section .tr-tabs a").mouseenter(function () {
        // 5.1�ҵ���ǰa�ĸ���Ԫ��li������
        var index = $(this).parent().index();
        // �����һ��˼�����ö���Ч��
        $(".tr-section .tr-tabs a").eq(lastIndex).children("span").stop().animate({top:18},300);
        $(this).children("span").stop().animate({top:0},300);
        $(".tr-section .tr-tabs a").eq(lastIndex).children("i").stop().animate({bottom:-75},300);
        $(this).children("i").stop().animate({bottom:-20},300);
        lastIndex = $(this).parent().index();
        //5.section-con�����ֲ�Ч��
        $(".tr-section-con .con-1").stop().animate({left:-index*1220},200);
    })
    // 3.section-con����Ч��
    $(".tr-section .tr-section-con ul a").mouseenter(function () {
        $(this).children("span").css("display","block");
    })
    $(".tr-section .tr-section-con ul a").mouseleave(function () {
        $(this).children("span").css("display","none");
    })
    // 6.video_pic-sectionͼƬ����Ч��
    $(".video_pic a").mouseenter(function () {
        $(this).children("img").stop().animate({width:288,height:164},200);
    })
    $(".video_pic a").mouseleave(function () {
        $(this).children("img").stop().animate({width:270,height:154},200);
    })
})