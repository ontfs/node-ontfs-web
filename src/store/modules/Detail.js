import axios from "axios/index";

const expURL = process.env.VUE_APP_ONT_API_URL;

export default {
  state: {
    onchaininfo: {},
    offchaininfo: {},
    nativebalance:[],
    oep4balance:[],
    oep5balance:[],
    oep8balance:[],
    txList:{},
    transferList:{},
    voterList:{}
  },
  getters: {
    nodeonchaininfo: state => state.onchaininfo,
    nodeoffchaininfo: state => state.offchaininfo,
    nativebalance: state => state.nativebalance,
    oep4balance: state => state.oep4balance,
    oep5balance: state => state.oep5balance,
    oep8balance: state => state.oep8balance,
    txList: state => state.txList,
    transferList: state => state.transferList,
    voterList: state => state.voterList,
  },
  mutations: {
    setnodeonchaindetailinfo(state, payload) {
      state.onchaininfo = payload;
    },
    setnodeoffchaindetailinfo(state, payload) {
      state.offchaininfo = payload;
    },
    setnativebalance(state, payload) {
      state.nativebalance = payload;
    },
    setoep4balance(state, payload) {
      state.oep4balance = payload;
    },
    setoep5balance(state, payload) {
      state.oep5balance = payload;
    },
    setoep8balance(state, payload) {
      state.oep8balance = payload;
    },
    settxlist(state, payload) {
      state.txList = payload;
    },
    settransferlist(state, payload) {
      state.transferList = payload;
    },
    setvoterlist(state, payload) {
      state.voterList = payload;
    },
  },
  actions: {
    async getNodeOnchainInfo({ commit }, params) {
      let url = "https://explorer.ont.io/v2/nodes/on-chain-info?public_key=" + params.pk;
      let ret = await axios.get(url);
      commit("setnodeonchaindetailinfo", ret.data.result);
    },
    async getNodeOffchainInfo({ commit }, params) {
      let url = "https://explorer.ont.io/v2/nodes/off-chain-info?public_key=" + params.pk;
      let ret = await axios.get(url);
      commit("setnodeoffchaindetailinfo", ret.data.result);
    },
    async getNativeBalance({ commit }, params) {
      let url = "https://explorer.ont.io/v2/addresses/" + params.address + "/native/balances";
      let ret = await axios.get(url);
      commit("setnativebalance", ret.data.result);
    },
    async getOep4Balance({ commit }, params) {
      let url = "https://explorer.ont.io/v2/addresses/" + params.address + "/oep4/balances";
      let ret = await axios.get(url);
      commit("setoep4balance", ret.data.result);
    },
    async getOep5Balance({ commit }, params) {
      let url = "https://explorer.ont.io/v2/addresses/" + params.address + "/oep5/balances";
      let ret = await axios.get(url);
      commit("setoep5balance", ret.data.result);
    },
    async getOep8Balance({ commit }, params) {
      let url = "https://explorer.ont.io/v2/addresses/" + params.address + "/oep8/balances";
      let ret = await axios.get(url);
      commit("setoep8balance", ret.data.result);
    },
    async getTxList({ commit }, params) {
      let url = "https://explorer.ont.io/v2/addresses/" + params.address + "/transactions?page_size="+params.pagesize+"&page_number="+params.pageno;
      let ret = await axios.get(url);
      let arr = {}
      arr.list = ret.data.result
      if(ret.data.result.length == params.pagesize){
        arr.total = params.pagesize*(params.pageno+1)
      }else{
        arr.total = params.pagesize*(params.pageno-1) + ret.data.result.length
      }
      commit("settxlist", arr);
    },
    async getTransferList({ commit }, params) {
      let url = "http://13.250.221.179:8585/v2/addresses/" + params.address + "/transactions?direction=desc&page_size="+params.pagesize+"&page_number="+params.pageno;
      let ret = await axios.get(url);
      let arr = {}
      arr.list = ret.data.result.content
      arr.total = params.pagesize*ret.data.result.total_pages
      commit("settransferlist", arr);
    },
    async getVoterList({ commit }, params) {
      let url = "http://13.250.221.179:8585/v2/nodes/governance?page_size="+params.pagesize+"&page_number="+params.pageno+"&pk="+params.pk;
      let ret = await axios.get(url);
      let arr = {}
      arr.list = ret.data.result.content
      arr.total = params.pagesize*ret.data.result.total_pages
      commit("setvoterlist", arr);
    }
  }
};
