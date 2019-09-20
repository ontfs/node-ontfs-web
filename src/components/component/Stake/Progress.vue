<template>
  <div>
    <div class="stake-progress-status-wrapper stake-progress-status-content" :style="{left: percent+'%'}">
      <div >
        <span class="stake-progress-status-text1">{{percent}}%</span>
        <span class="stake-progress-status-text2">({{$HelperTools.toFinancialVal(120000-blockAmount)}}/{{$HelperTools.toFinancialVal(120000)}})</span>
      </div>
    </div>
    <el-progress  :percentage="percent"></el-progress>
    <p class="stake-progress-p">
      <span><span class="stake-progress-text">{{$t('stake.progress')}} {{$t('stake.round1')}} {{rounds}}{{$t('stake.round2')}}</span></span>
    </p>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: "progresss",
  components: { countTo },
  props: {
/*     percent: {
      type: Number
    }, */
    rounds: {
      type: Number
    },
  },
  computed: {
    blockAmount() {
        return this.$store.getters.blockstonext || 0;
    },
    percent(){
        let amount = this.$store.getters.blockstonext || 0;
        let per = Math.round((120000-amount)/1200)
        return  per == 100 ? 0 : per
    },
  },
  data(){
    return{
      startVal:0,
      endVal:0,
    }
  },
  watch:{
    "blockAmount":function(newValue,oldValue){
      this.endVal = newValue
      if ( oldValue == 0 ) {
        this.startVal = newValue
      } else {
        this.startVal = oldValue
      }
    }
  }
};
</script>
<style>
.progress-p{
    text-align: left;
    margin: 4px 0 0 0;
}
.el-progress__text{
  display: none;
}
.el-progress-bar{
  margin-right: 0;
  padding-right: 0;
}
.el-progress-bar__outer{
  border-radius: 0px;
}
.el-progress-bar__inner{
  border-radius: 0px;
}
.progress-p span{
  font-size:16px;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:22px;
}
.lang_en .progress-p span{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
.progress-text{
  color: #808080 !important;
}
.stake-progress-status-wrapper{
  position: relative;
  margin-bottom: 12px;
}
.stake-progress-status-content{
  display: flex;
  flex-direction: column;
  width: 112px;
  padding: 16px;
  background:rgba(250,250,250,1);
  text-align: left;
  transform: translate(-50%,0)
}
.stake-progress-status-text1{
  font-size:21px;
  font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:28px;
  margin-bottom: 3px;
}
.stake-progress-status-text2{
  font-size:14px;
  font-family: NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:400;
  color:rgba(194,194,194,1);
  line-height:19px;
}
.stake-progress-text{
  font-size:16px;
  font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:22px;
}
.stake-progress-p{
  text-align: left;
  margin-top: 12px;
  margin-bottom: 0px;
}
@media screen and (max-width:768px){
  .stake-progress-status-wrapper{
    width: 240px;
    flex-direction: column;
    text-align: center;
    left: 50% !important;
    justify-content: center;
  }
  .stake-progress-status-wrapper div{
    display: flex;
    flex-direction: column;
    width: 120px;
    margin: auto;
    text-align: left;
  }
  .time-class{
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

