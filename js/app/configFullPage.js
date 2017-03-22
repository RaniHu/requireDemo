/**
 * Created by Administrator on 2017/3/22 0022.
 */
define(['fullPage'], function (fullPage) {
    return {
        config:$("#main").fullpage({
            verticalCentered: true,                                                     //内容垂直居中
            sectionsColor: ['#23BBB1', '#6c85bb', '#5dc3b1', '#01c0c8', '#009966'],     //设置每一页背景颜色
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],                     //定义锚链接
            scrollingSpeed: 500                                                         //滚动速度
        })
    }

});
