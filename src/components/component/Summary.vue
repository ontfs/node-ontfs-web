<template>
  <div class="summary-container">
    <!-- <progress-nav :percent="percent" :blocks="blockAmount"></progress-nav> -->
    <nodes-nav :nodesummary="nodeAmount"></nodes-nav>
    <!-- <charts-nav :total="totalstake.total_un_stakes" :totalstake="totalstake.current_total_stakes" :cnamelist="namelist" :crankdata="rankdata" ></charts-nav> -->
    <apply-nav></apply-nav>
  </div>
</template>

<script>
// import ProgressNav from '@/components/component/Progress.vue'
import NodesNav from '@/components/component/Nodesummary.vue'
// import ChartsNav from '@/components/component/Chartsummary.vue'
import ApplyNav from '@/components/component/Nodeapply.vue'
export default {
  name: 'mapView',
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  components: {
    // ProgressNav,
    NodesNav,
    // ChartsNav,
    ApplyNav
  },
  computed: {
    blockAmount() {
      return this.$store.getters.blockstonext.count_to_next_round || 0
    },
    nodeAmount() {
      return this.$store.getters.nodeSummary || {}
    },
    totalstake() {
      return this.$store.getters.totalstakeamount || {}
    },
    percent() {
      let amount = this.$store.getters.blockstonext.count_to_next_round || 0
      let total = this.$store.getters.blockstonext.max_staking_change_count || 0
      let per = Math.round((total - amount) / (total / 100))
      return per == 100 ? 0 : per
    },
    rankchange() {
      return this.$store.getters.rankchangelist || []
    }
  },
  watch: {
    rankchange: function() {
      for (let i = 0; i < this.rankchange.length; i++) {
        this.namelist.push(this.rankchange[i].name)
        this.rankdata.push(this.rankchange[i].rank_change)
      }
    }
  },
  data() {
    return {
      totalont: 1000000000,
      /*       rankdata:[15,12,8,8,4],
      namelist:["Huobi Wallet","charbo","Sesameseed","本体微积分","Polaris"] */
      rankdata: [],
      namelist: []
    }
  },
  mounted() {
    // this.getBlocksAmount()
    // this.intervalBlock1 = setInterval(() => {
    //   this.getBlocksAmount()
    // }, 6000)
    this.getNodeAmount()
    // this.getTotalStake()
    // this.getRankChange()
  },
  methods: {
    getBlocksAmount() {
      this.$store.dispatch('getBlocksToNextRound').then()
    },
    getNodeAmount() {
      this.$store.dispatch('getNodeSummary').then()
    },
    getTotalStake() {
      this.$store.dispatch('getTotalStake').then()
    },
    getRankChange() {
      this.$store.dispatch('getRankChangeList').then()
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalBlock1)
  }
}
</script>
<style>
.summary-container {
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1200px;
  margin: auto;
  padding-top: 100px;
}
</style>
