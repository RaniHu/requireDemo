/**
 * Created by Administrator on 2017/2/20 0020.
 */

//使用块作用域申明function避免污染全局变量

//定义的模块没有依赖其他模块
define(function(){
   return{
       name:'rita',
       age:22
   }
});