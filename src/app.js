require('./styles/usage/app.scss')

var layout = require('./scripts/tpls/layout.string')
var common = require('./scripts/utils/util.common.js')

common.render(layout)
//components
import index from "./scripts/components/index.vue"
import home from "./scripts/components/home.vue"
import my from "./scripts/components/my.vue"
import detail from "./scripts/components/detail.vue"


//router 定义路由
const routes= [{
   path: '/',
   component: index,
   children:[{
     path:'/',
     component: home
   },{
     path:'/my',
     component: my
   }]
 },
 {
     path:'/detail/:title',
     component:detail
}]
//创建router实例，传routes配置
const router= new VueRouter({
  routes  //(缩写) 相当于 routes:routes
})
//创建和挂载根实例，要通过router配置参数注入路由
const app= new Vue({
  router
}).$mount('#app')


// var common = require('./scripts/utils/util.common.js');
// var html = require('./scripts/tpls/index.string');
// common.render(html);
//
// require('./scripts/views/index.js');
