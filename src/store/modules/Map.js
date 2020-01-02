import axios from 'axios/index'

const expURL = process.env.VUE_APP_API

export default {
  state: {
    mapList: {}
  },
  getters: {
    nodedetailinfo: state => state.nodedetail
  },
  mutations: {
    setnodedetailinfo(state, payload) {
      state.candidates = payload
    }
  },
  actions: {
    async getNodeDetailInfo({ commit }) {
      let url = expURL + 'candidate/info/All'
      let ret = await axios.get(url)
      commit('setnodedetailinfo', ret.data.Result)
    }
  }
}
