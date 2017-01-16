// // ﻿var Vue= require("../lib/vue.js");
// // var Swiper= require("../lib/swiper.js");
// new Vue({
//   el:'#m-index',
//   data:{
//     swiper:null,
//     navIndex:0,
//     nav:['足球现场','足球生活','足球美女'],
//     list:[]
//   },
//   methods:{
//     changeTab:function(index){
//       this.swiper.slideTo(index);
//     }
//   },
//   mounted:function(){
//     fetch('/api/list').then(response => response.json())
//     .then( res => {
//       var that=this;
//       that.list= res;
//       // this.swiper=new Swiper('#index-swiper',{
//       //   loop:false
//       // });
//       that.navSwiper= new Swiper('#nav-swiper',{
//         loop:false,
//         effect:'fade',
//         autoplay:2000,
//         preventClicks:false,
//         autoplayDisableOnInteraction:false
//       });
//     })
//     .catch(e => console.log("Oops, error", e))
//   }
// });
