<template>
  <div class="chart-summary-container">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <div class="grid-content bg-purple">
          <pie-nav v-if="totalstake"  :totalstake="totalstake" :totalnostake="total-totalstake" ></pie-nav>
        </div>
      </el-col>
      <el-col :span="6" :xs="24">
        <div class="grid-content bg-purple pie-wrapper">
          <amount-nav v-if="totalstake" :amountstake="totalstake" :amountnostake="total - totalstake" :text1="$t('summary.totalstake')" :text2="$t('summary.oftotal')"  ></amount-nav>
        </div>
      </el-col>
      <el-col :span="12" :xs="0">
        <div class="grid-content bg-purple">
          <div class="bar-header-s" >{{$t('summary.increse')}}<span class="text-explain">{{$t('summary.increseexplain')}}</span></div>
          <bar-nav :bardata="cnamelist"  :barrankdata="crankdata"></bar-nav>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PieNav from "@/components/component/Piechart.vue";
import BarNav from "@/components/component/Barchart.vue";
import AmountNav from "@/components/component/Stakeamount";
export default {
  name: "progresss",
  props: {
    percent: {
      type: Number
    },
    blocks: {
      type: Number
    },
    total:{
      type: String
    },
    totalstake:{
      type: Number
    },
    crankdata:{
      type:Array
    },
    cnamelist:{
      type:Array
    }
  },
  components: {
      PieNav,
      BarNav,
      AmountNav
  },
  data() {
    return {
      namelist:[],
      rankdata:[]
    }
  },
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
.chart-summary-container{
  padding-top: 100px;
}
.pie-wrapper{
  padding-top: 40px;
}
.bar-header-s{
  margin:0;
  padding-left:5px;
  padding-bottom:15px;
  text-align:left;
  font-size:16px;
  line-height: 22px;
  font-weight: 600;
}
.lang_en .bar-header-s{
    font-family: NunitoSans-SemiBold,'Avenir', Helvetica, Arial, sans-serif;
}
.text-explain{
  color:#808080;
}
</style>

