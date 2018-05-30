// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'      //引入路由
import ElementUI from 'element-ui' //引入js
import 'element-ui/lib/theme-chalk/index.css'//引入css
import axios from 'axios';        //引入axios请求
import '../config/axiosJs';       //引入axios文件配置
import echarts from 'echarts'     //引入echarts
import jquery from 'jquery'     //引入jquery

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;     //原型链修改使用axios
Vue.prototype.$echarts = echarts; //原型链修改使用echarts
Vue.prototype.$jquery = jquery; //原型链修改使用jquery

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
