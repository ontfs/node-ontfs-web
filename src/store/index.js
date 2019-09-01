import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/Home";
import detail from "./modules/Detail";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    detail
  }
});

export default store;
