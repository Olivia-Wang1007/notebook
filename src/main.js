import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import Routers from './router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { Button, Table } from 'view-design';
Vue.component('Button', Button);
Vue.component('Table', Table);

//Vue.use(VueRouter);
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
