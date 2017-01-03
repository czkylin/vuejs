var Vue= require("../lib/vue.js");
var Swiper= require("../lib/swiper.js");
new Vue({
  el:'#m-index',
  data:{
    swiper:null,
    navIndex:0,
    nav:[
      {
        title:'足球现场',
        isActive:true
      },
      {
        title:'足球生活',
        isActive:false
      },
      {
        title:'足球美女',
        isActive:false
      }
    ],
    list:[]
  },
  methods:{
    changeTab:function(index){
	     console.log(this.swiper);
       console.log( this.swiper );
      this.swiper.slideTo(index);
    }
  },
  mounted:function(){
    fetch('/api/list').then(response => response.json())
    .then( res => {
      this.list= res;
      this.swiper=new Swiper('#index-swiper',{
        loop:false
      });
    })
    .catch(e => console.log("Oops, error", e))
  }
});
