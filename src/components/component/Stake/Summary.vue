<template>
  <div class="stake-summary">
    <div class="stake-summary-container">
      <div class="stake-summary-content">
        <img class="stake-summary-img" src="../../../assets/img/stake/time.png"/>
        <div class="stake-summary-desc">
          <span class="stake-summary-desc-text1" v-if="$i18n.locale !='zh'">{{days}} {{$t('stake.days')}} {{hours}} {{$t('stake.hours')}} {{$t('stake.left')}}</span>
          <span class="stake-summary-desc-text1" v-if="$i18n.locale =='zh'">{{$t('stake.cnleft')}} {{days}} {{$t('stake.days')}} {{hours}} {{$t('stake.hours')}}</span>
          <span class="stake-summary-desc-text2">{{$t('stake.currnetround1')}}</span>
        </div>
      </div>
      <div class="stake-summary-content">
        <img class="stake-summary-img" src="../../../assets/img/stake/block.png"/>
        <div class="stake-summary-desc">
          <span  class="stake-summary-desc-text1" v-if="$i18n.locale !='zh'">{{$HelperTools.toFinancialVal(blockAmount)}} {{$t('stake.blocks')}} {{$t('stake.left')}}</span>
          <span  class="stake-summary-desc-text1" v-if="$i18n.locale =='zh'">{{$t('stake.cnleft')}} {{$HelperTools.toFinancialVal(blockAmount)}} {{$t('stake.blocks')}}</span>
          <span  class="stake-summary-desc-text2">{{$t('stake.currnetround')}}</span>
        </div>
      </div>
    </div>
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
    days: {
      type: Number
    },
    hours: {
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
.stake-summary{
  background-color: #000;
  border-radius: 6px;
  padding-top: 38px;
  padding-bottom: 38px;
  margin-top: 40px;
}
.stake-summary-container{
  display: flex;
}
.stake-summary-img{
  width: 44px;
  height: 45px;
  margin-right: 15px;
  margin-top: 3px;
}
.stake-summary-content{
  width: 50%;
  display: flex;
  justify-content: center;
}
.stake-summary-desc{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.stake-summary-desc-text1{
  font-size:22px;
  font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:30px;

}
.stake-summary-desc-text2{
  font-size:16px;
  font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:22px;
}
@media screen and (max-width:768px){
  .stake-summary-container{
    display: flex;
    flex-direction: column;
    width: 290px;
    margin: auto;
  } 
  .stake-summary-content{
    width: 100%;
    padding: 10px 0;
    justify-content: start;
  }
  .stake-summary{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .stake-summary-desc-text1{
    font-size: 20px;
    line-height: 27px;
  }
  .stake-summary-desc-text2{
    font-size:14px;
    line-height: 19px;
  }
  .guide-title-wrapper{
    padding-top: 32px !important;
    padding-bottom: 8px !important;
  }
  .guide-title-text{
    font-size: 16px !important;
    line-height: 22px !important;
    padding-left: 16px !important;
  }
}
</style>

