import axios from 'axios/index'

const expURL = process.env.VUE_APP_API

export default {
  state: {
    summary: {},
    maplist: {},
    nodelist: {},
    blockstonextround: 0,
    totalstake: {},
    offnodelist: {},
    rankchangelist: [],
    storageList: []
  },
  getters: {
    nodeSummary: state => state.summary,
    nodeMapList: state => state.maplist,
    NodeList: state => state.nodelist,
    offNodeList: state => state.offnodelist,
    blockstonext: state => state.blockstonextround,
    totalstakeamount: state => state.totalstake,
    rankchangelist: state => state.rankchangelist,
    storageList: state => state.storageList
  },
  mutations: {
    setNodeSummary(state, payload) {
      state.summary = payload
    },
    setNodeMapList(state, payload) {
      state.maplist = payload
    },
    setNodeList(state, payload) {
      state.nodelist = payload
    },
    setOffNodeList(state, payload) {
      state.offnodelist = payload
    },
    setBlocksToNextRound(state, payload) {
      state.blockstonextround = payload
    },
    setTotalStake(state, payload) {
      state.totalstake = payload
    },
    setRankChangeList(state, payload) {
      state.rankchangelist = payload
    },
    setStorageList(state, payload) {
      state.storageList = payload
    }
  },
  actions: {
    async getTotalStake({ commit }) {
      let url = expURL + '/v2/nodes/current-total-stakes'
      let ret = await axios.get(url)
      commit('setTotalStake', ret.data.result)
    },
    async getNodeSummary({ commit }) {
      let url = expURL + '/v2/nodes/count'
      let ret = await axios.get(url)
      commit('setNodeSummary', ret.data.result)
    },
    async getBlocksToNextRound({ commit }) {
      // let url = expURL+"/v2/nodes/block-count-to-next-round" ;
      let url = expURL + '/v2/nodes/block-count-to-next-round'
      let ret = await axios.get(url)
      commit('setBlocksToNextRound', ret.data.result)
    },
    async getNodeMapList({ commit }, params) {
      let url = expURL + '/v2/nodes/all-in-network'
      let ret = await axios.get(url)
      commit('setNodeMapList', ret.data.result)
    },
    async getNodeList({ commit }, params) {
      let url = expURL + '/v2/nodes/current-stakes'
      let ret = await axios.get(url)
      commit('setNodeList', ret.data.result)
    },
    async getOffNodeList({ commit }, params) {
      let url = expURL + '/v2/nodes/off-chain-infos'
      let ret = await axios.get(url)
      commit('setOffNodeList', ret.data.result)
    },
    async getRankChangeList({ commit }, params) {
      let url = expURL + '/v2/nodes/rank-change'
      let ret = await axios.get(url)
      commit('setRankChangeList', ret.data.result)
    },
    async getStorageList({ commit }, params) {
      let url = expURL + '/v2/nodes/storage-node'
      let ret = await axios.get(url)
      commit('setStorageList', ret.data.result)
    }
  }
}
