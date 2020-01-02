import axios from 'axios/index'

const expURL = process.env.VUE_APP_API

export default {
  state: {
    summaryinfo: {},
    roundfirstinfo: {},
    currentcycleinfo: {}
  },
  getters: {
    summaryinfo: state => state.summaryinfo,
    roundfirstinfo: state => state.roundfirstinfo,
    currentcycleinfo: state => state.currentcycleinfo
  },
  mutations: {
    setsummaryinfo(state, payload) {
      state.summaryinfo = payload
    },
    setroundfirstinfo(state, payload) {
      state.roundfirstinfo = payload
    },
    setcurrentcycleinfo(state, payload) {
      state.currentcycleinfo = payload
    }
  },
  actions: {
    async getSummaryInfo({ commit }) {
      let url = expURL + '/v2/summary/blockchain/latest-info'
      let ret = await axios.get(url)
      commit('setsummaryinfo', ret.data.result)
    },
    async getRoundFirstInfo({ commit }, params) {
      let url =
        'https://dappnode1.ont.io:10334/api/v1/block/details/height/' +
        params.height
      let ret = await axios.get(url)
      commit('setroundfirstinfo', ret.data.Result.Header)
    },
    async getCurrentCycle({ commit }, params) {
      let url = expURL + '/v2/nodes/current-staking-cycle'
      let ret = await axios.get(url)
      commit('setcurrentcycleinfo', ret.data.result)
    }
  }
}
