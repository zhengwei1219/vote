

////////////////////////////////
//首页大banner
$(function () {
    $("#ksslide").KinSlideshow({
        moveStyle: "right", //left:向左切换,right:向右切换,up:向上切换,down:向下切换 [默认向左切换]
        intervalTime: 4, //设置间隔时间为5秒
        mouseEvent: "mouseclick", //mouseclick：鼠标单击切换。mouseover：鼠标滑过切换。[默认为鼠标点击按钮切换]
        titleFont: { TitleFont_size: 14, TitleFont_color: "#ffffff"} ////设置标题文字大小为14px，颜色：#FF0000
    });
});


////////////////////////////////
