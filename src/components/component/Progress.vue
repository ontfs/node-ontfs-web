<template>
  <div>
    <p class="progress-p">
      <span v-if="$t('language.name') == 'En'"><countTo :startVal='startVal' :endVal='endVal' :duration='3000' :autoplay='true'></countTo> <span class="progress-text">{{$t('summary.tonext')}}</span></span>
      <span v-else><span class="progress-text">{{$t('summary.tonext')}}</span> <countTo :startVal='startVal' :endVal='endVal' :duration='3000' :autoplay='true'></countTo> <span class="progress-text">{{$t('summary.blocks')}}</span></span>
    </p>
    <el-progress  :percentage="percent"></el-progress>
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
    blocks: {
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
</style>

