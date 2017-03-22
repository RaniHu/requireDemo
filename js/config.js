/**
 * Created by Administrator on 2017/3/22 0022.
 */

//配置文件
requirejs.config({
    baseUrl:"./js",                          //用于加载模块的根路径
    paths: {                                 //用于映射不存在根路径下面的模块路径
        'jquery':'lib/jquery',
        'fullPage':'lib/jquery.fullPage',
        'configFullPage':'app/configFullPage',
        'add':'app/add'
    },
    shim:{                                  //加载没有按照AMD规范，用define定义的模块，如backbone
        backbone : {
            exports : 'backbone'
        }
    }
});


//define([中为所要依赖的文件，如果配置了模块id和路径的映射，即可用模块id来引入],回调函数)
define(['jquery','fullPage','configFullPage','add'],function($,FullPage,ConfigFullPage,Add){
    var btn1=$("#btn1");
    btn1.on("click",function(){
        $("#app1").html("我已经加载成功了！");
        $("#app2>span").html(Add.addFun(10,20));
    });
});