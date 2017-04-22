$(function () {
    $(".nie_download_wrap .fold_wrap a").click(function () {
        $(".nie_download_wrap").toggleClass("fold");
        $(".nie_download_wrap .fold_wrap").hide();
        $(".nie_download_wrap .nie-download").show();
    });
    $(".nie_download_wrap .close_donwloadbar").click(function () {
        $(".nie_download_wrap").toggleClass("fold");
        $(".nie_download_wrap .fold_wrap").show();
        $(".nie_download_wrap .nie-download").hide();
    });
});