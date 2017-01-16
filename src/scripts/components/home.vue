<template>
  <div class="container">
    <header>
      <span>
        <i><img src=""/></i>
        <b>随意搜索</b>
      </span>
    </header>
    <section>
      <div class="banner">
        <div class="swiper-container" id="nav-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner,index) in list.ban">

                <img :src="banner.src"/>

            </div>
            <!-- <div class="swiper-slide index-first"><img src="/images/index/nav-1.jpg"/></div>
            <div class="swiper-slide index-second"><img src="/images/index/nav-2.jpg"/></div>
            <div class="swiper-slide index-third"><img src="/images/index/nav-3.jpg"/></div>
            <div class="swiper-slide index-fourth"><img src="/images/index/nav-4.jpg"/></div>
            <div class="swiper-slide index-fifth"><img src="/images/index/nav-5.jpg"/></div>
            <div class="swiper-slide index-sixth"><img src="/images/index/nav-6.jpg"/></div> -->
          </div>
        </div>
      </div>
      <ul class="nav">
        <li v-for="(item,index) in list.navList">
          <router-link :to="'/detail/'+item.title">
            <i class="yo-ico" :class="item.classes" v-html="item.ico"></i>
            <b v-html="item.title"></b>
          </router-link>
        </li>
      </ul>
      <div class="main-list">
        <div class="change">
          <span>约伴</span>
          <ul>
            <li v-for="(item,index) in list.month">
              <b v-html="item"></b>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  var common= require('../utils/util.common.js');
  module.exports={
    data:function(){
      return {
        Swiper:null,
        navIndex:0,
        list:{}
      }
    },
    methods:{
      changeTab:function(index){
        this.swiper.slideTo(index);
      }
    },
    mounted:function(){
      fetch('/api/list').then(response => response.json())
      .then( res => {
        var that=this;
        that.list= res;
        that.navSwiper= new Swiper('#nav-swiper',{
          loop:false,
          effect:'fade',
          autoplay:2000,
          preventClicks:false,
          autoplayDisableOnInteraction:false
        });
        //console.log(that.navSwiper);
        // var date=new Date();
        // console.log(date);
      })
      .catch(e => console.log("Oops, error", e))
    }
  }
</script>
