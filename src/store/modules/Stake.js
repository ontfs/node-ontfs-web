import axios from "axios/index";

const expURL = process.env.VUE_APP_ONT_API_URL;

export default {
  state: {
    summaryinfo: {},
    roundfirstinfo:{}
  },
  getters: {
    summaryinfo: state => state.summaryinfo,
    roundfirstinfo: state => state.roundfirstinfo,
  },
  mutations: {
    setsummaryinfo(state, payload) {
      state.summaryinfo = payload;
    },
    setroundfirstinfo(state, payload) {
      state.roundfirstinfo = payload;
    },
  },
  actions: {
    async getSummaryInfo({ commit }) {
      let url = "https://explorer.ont.io/v2/summary/blockchain/latest-info";
      let ret = await axios.get(url);
      commit("setsummaryinfo", ret.data.result);
    },
    async getRoundFirstInfo({ commit }, params) {
      let url = "https://dappnode1.ont.io:10334/api/v1/block/details/height/"+params.height;
      let ret = await axios.get(url);
      commit("setroundfirstinfo", ret.data.Result.Header);
    }
  }
};
