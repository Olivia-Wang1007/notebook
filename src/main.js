import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from 'moment'


import AtComponents from 'at-ui'
import 'at-ui-style' 
Vue.use(AtComponents)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import iView from 'iview';
import 'iview/dist/styles/iview.css';  


Vue.use(iView);
Vue.use(ElementUI);
Vue.config.productionTip = false;

//import store from './store/index'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
  //es5函数参数设置默认值
  //const lastFormatString = formatString || ''

  
   // moment(input) 把时间字符串转成时间对象
   // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
  return moment(input).format(formatString)
})


