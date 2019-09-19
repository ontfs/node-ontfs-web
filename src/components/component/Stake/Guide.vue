<template>
  <div class="big-guide-class">
    <div class="guide-title-wrapper">
      <span class="guide-title-text">{{$t('stake.guide')}}</span>
    </div>
    <div class="guide-class">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="$t('stake.onto')" name="first">{{$t('stake.onto')}}</el-tab-pane>
          <el-tab-pane :label="$t('stake.owallet')" name="second">{{$t('stake.owallet')}}</el-tab-pane>
        </el-tabs>
        <guideonto-nav v-if="ontoFlag" :data="ontodata"></guideonto-nav>
        <guideowallet-nav v-if="owalletFlag" ></guideowallet-nav>
    </div>
    <div class="guide-bottom"></div>
  </div>
</template>

<script>
import GuideontoNav from './GuideONTO'
import GuideowalletNav from './GuideOwallet'
import SummaryNav from './Summary'
export default {
  name: "progresss",
  components: { 
    GuideontoNav,
    GuideowalletNav
  },
  props: {
/*     percent: {
      type: Number
    }, */
    rounds: {
      type: Number
    },
    blocks: {
      type: Number
    },
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
  },
  data(){
    return{
      activeName: 'first',
      ontoFlag:true,
      owalletFlag:false,
      startVal:0,
      endVal:0,
      ontodata:[
        {
          type:"step",
          content1:"Step 1:",
          content2:"Download the new",
          content3:"ONTO",
          url:"https://onto.app/"
        },
        {
          type:"img",
          url:"https://i.postimg.cc/TYDTLW44/s1.png"
        },
        {
          type:"step",
          content1:"Step 2:",
          content2:"Open ONTO and click “ONT” in the “Assets” page",
        },
        {
          type:"img",
          url:"https://i.postimg.cc/mg3RVWR3/s2.png"
        },
        {
          type:"step",
          content1:"Step 3:",
          content2:"Click “Stake” on the bottom left and enter the stake page",
        },
        {
          type:"img",
          url:"https://i.postimg.cc/FRz49fSG/s3.png"
        },
        {
          type:"step",
          content1:"Step 4:",
          content2:"Select a node you want to stake into by clicking “Recommended stake nodes” and enter the stake amount (integer multiple of 500 ONT). ",
        },
        {
          type:"note",
          content1:"Note",
          content2:"For example, if you would like to stake 500 ONT, please enter “1”. After you have confirmed the information, click “Stake now” and confirm your password, and the stake authorization is complete!",
        },
        {
          type:"img",
          url:"https://i.postimg.cc/nLHxPScy/s4.png"
        },
        {
          type:"img",
          url:"https://i.postimg.cc/d04FPRhL/s4a.png"
        },
        {
          type:"img",
          url:"https://i.postimg.cc/RZx4cZrV/s4b.png"
        },
        {
          type:"step",
          content1:"Step 5:",
          content2:"After you have authorized a stake, you can view the staking information in “My stake” page. You can claim ONG rewards by clicking “Claim” on the bottom left in the “Node staking” page.",
        },
        {
          type:"img",
          url:"https://i.postimg.cc/v8jQZv3n/s5.png"
        },
      ],
      owalletdata:{}
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
  },
  methods: {
    handleClick(tab, event) {
      if (tab.name == "first"){
        this.owalletFlag = false
        this.ontoFlag = true
      }
      if (tab.name == "second"){
        this.ontoFlag = false
        this.owalletFlag = true
      }
    }
  }
};
</script>
<style>
.guide-class{
  padding-bottom:48px;
  background:rgba(255,255,255,1);
}
.guide-class .el-tabs__nav-scroll{
  display: flex;
  justify-content: center;
}
.guide-class #pane-first{
  display: none !important;
}
.guide-class #pane-second{
  display: none !important;
}
.guide-title-wrapper{
  padding: 16px 0;
  text-align: left;
}
.guide-title-text{
  font-size:24px;
  font-family:NunitoSans;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:32px;
}
.big-guide-class .el-tabs__item{
  font-size:14px;
  font-family:NunitoSans;
  font-weight:bold;
  line-height:19px;
  height: 58px;
  padding-top: 30px;
}
.guide-bottom{
  display: none;
}
@media screen and (max-width:768px){
  .guide-bottom{
    width: 100%;
    height: 24px;
    background: rgba(243,246,248,1);
    display: block;
  }
}
</style>

