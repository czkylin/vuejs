<template>
  <div class="m-index" id="m-index">
    <router-view></router-view>
    <footer>
      <ul>
        <li v-for="(fn,i) in footerNav" :class="{active: i==navIndex}" @click="changeNav(i)">
          <router-link :to="fn.router">
            <i class="yo-ico" v-html="fn.ico"></i>
            <b v-html="fn.title"></b>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
  module.exports={
    data:function(){
      return{
        navIndex:0,
        footerNav:[
          {
            router:'/',
            ico:'&#xe613;',
            title:'首页'
          },
          {
            router:'/way',
            ico:'&#xe860;',
            title:'路线'
          },
          {
            router:'/photo',
            ico:'&#xe6c9;',
            title:''
          },
          {
            router:'/friends',
            ico:'&#xe746;',
            title:'朋友'
          },
          {
            router:'/my',
            ico:'&#xe60f;',
            title:'我'
          },
        ]
      }
    },
    methods:{
      changeNav:function(index){
        this.navIndex= index;
      }
    }
  }
</script>
