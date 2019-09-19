import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/Home";
import detail from "./modules/Detail";
import stake from "./modules/Stake";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    detail,
    stake
  }
});

export default store;
