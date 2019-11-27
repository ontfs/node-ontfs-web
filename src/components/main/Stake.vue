<template>
  <div>
    <top-nav></top-nav>
    <el-main>
        <div class="stake">
          <time-nav :rounds="round" :days="days" :hours="hours"></time-nav>
        </div>
        <div class="guide">
          <div class="guide-content">
            <guide-nav></guide-nav>
          </div>
        </div>
    </el-main>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNav from "../common/Top";
import FooterNav from "../common/Footer";
import TimeNav from "../component/Stake/Time";
import GuideNav from "../component/Stake/Guide";
export default {
  name: 'stake',
  components: {
    TopNav,
    FooterNav,
    TimeNav,
    GuideNav
  },
  props: {
    msg: String
  },
  computed: {
    summarydata() {
        return this.$store.getters.summaryinfo || {};
    },
    blockAmount() {
        return this.$store.getters.blockstonext || 0;
    },
    roundfirstinfo() {
        return this.$store.getters.roundfirstinfo || 0;
    },
    currentcycleinfo() {
        return this.$store.getters.currentcycleinfo || 0;
    },
  },
  watch:{
  },
  data() {
    return {
      round:51,
      days:0,
      hours:0,
      startTime:6534300,
    };
  },
  mounted() {
    this.getBlocksAmount()
    this.intervalBlock1 = setInterval(() => {
        this.getBlocksAmount()
    }, 6000)
    window.scrollTo(0,0);
  },
  watch:{
    "blockAmount":function(){
      this.getSummaryInfos()
      this.getCurrentCycle()
    },
    "currentcycleinfo":function(){
      this.round = this.currentcycleinfo
    },
    "summarydata":function(){
      let roundFirstBlock = this.summarydata.block_height - (this.blockAmount.max_staking_change_count -  this.blockAmount.count_to_next_round)
      this.getRoundFirstInfo(roundFirstBlock)
    },
    "roundfirstinfo":function(){
      let timestamp = Date.parse(new Date())/1000;
      let eachBlockTime = ((timestamp - this.roundfirstinfo.Timestamp)/(this.blockAmount.max_staking_change_count -  this.blockAmount.count_to_next_round)).toFixed(5)
/*       console.log(eachBlockTime) */
      let lastime = eachBlockTime*this.blockAmount.count_to_next_round
      this.days = Math.floor((lastime/86400))
      this.hours = Math.ceil((lastime - this.days*86400)/3600)
      console.log("距离"+this.round+"周期结束还有"+this.days+"天"+this.hours+"小时")
    }
  },
  methods: {
    getBlocksAmount(){
        this.$store.dispatch("getBlocksToNextRound").then();
    },
    getSummaryInfos(){
      this.$store.dispatch("getSummaryInfo").then();
    },
    getRoundFirstInfo($height){
      let params={}
      params.height = $height
      this.$store.dispatch("getRoundFirstInfo",params).then();
    },
    getCurrentCycle(){
      this.$store.dispatch("getCurrentCycle").then();
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalBlock1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-main{
    padding:0;
}
.stake{
  background-color: #fff;
  max-width: 1200px;
  margin: auto;
}
a:-webkit-any-link{
  text-decoration:none !important;
}
.s-color{
  color:#2fa3f1;
}
.guide{
  background: rgba(243,246,248,1);
}
.guide-content{
  max-width: 1200px;
  margin: auto;
}
</style>
