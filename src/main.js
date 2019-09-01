import Vue from 'vue'
import router from "./router";
import store from "./store/index";
import i18n from "./lang";
import ElementUI from 'element-ui';
import App from './App.vue'
import utils from './utils'
import Tools from "./utils/tools";
import OntPagination from './components/common/OntPagination'
Vue.component('ont-pagination', OntPagination);
Vue.use(Tools);

Vue.prototype.$utils = utils;


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
