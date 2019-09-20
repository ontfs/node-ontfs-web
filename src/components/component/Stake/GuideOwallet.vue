<template>
<div class="owallet-ow-guide-text-container">
  <div class="ow-guide-text-class">
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-step ow-guide-normal-text">
        <span class="ow-guide-blod-text">{{$t('owallet.item1')}}</span>
        {{$t('owallet.item2')}}<a  style="color: #409EFF;"  :href="$t('owallet.owalleturl')" target="_blank">{{$t('owallet.item3')}}</a>{{$t('owallet.item4')}}
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item5')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-step ow-guide-normal-text">
        <span class="ow-guide-blod-text">{{$t('owallet.item6')}}</span>
        {{$t('owallet.item7')}}<span class="ow-guide-blod-text" >{{$t('owallet.item8')}}</span><span v-if="$i18n.locale == 'ko'" >{{$t('owallet.item8ko')}}</span>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item9')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-step ow-guide-normal-text">
        <span class="ow-guide-blod-text">{{$t('owallet.item10')}}</span>
        {{$t('owallet.item11')}}
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-note ow-guide-normal-text">
        <span class="ow-guide-blod-text">{{$t('owallet.item12')}}</span>
        {{$t('owallet.item13')}}<span class="ow-guide-blod-text" >{{$t('owallet.item14')}}</span>{{$t('owallet.item15')}}
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item16')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <div class="ow-guide-note">
        <p class=" ow-guide-normal-text">
          <span class="ow-guide-blod-text">{{$t('owallet.item17')}}</span>
          {{$t('owallet.item18')}}{{$t('owallet.item19')}}
        </p>
      </div>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item20')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-step ow-guide-normal-text">
        <span class="ow-guide-blod-text">{{$t('owallet.item21')}}</span>
        {{$t('owallet.item22')}}<span class="ow-guide-blod-text" >{{$t('owallet.item23')}}</span>{{$t('owallet.item24')}}
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item25')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item26')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <div class="ow-guide-note">
        <p class="ow-guide-normal-text">
          <span class="ow-guide-blod-text">{{$t('owallet.item27')}}</span>
        </p>
        <p class="ow-guide-normal-text">
          {{$t('owallet.item28')}}<span class="ow-guide-blod-text" >{{$t('owallet.item29')}}</span>{{$t('owallet.item30')}}
        </p>
      </div>
    </div>
    <div class="ow-guide-text-warpper">
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item31')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item32')"/>
      </p>
    </div>
    <div class="ow-guide-text-warpper">
      <div class="ow-guide-note">
        <p class="ow-guide-normal-text">
          <span class="ow-guide-blod-text">{{$t('owallet.item33')}}</span>
        </p>
        <p class="ow-guide-normal-text">
          {{$t('owallet.item34')}}
        </p>
        <p class="ow-guide-normal-text">
          {{$t('owallet.item35')}}
        </p>
      </div>
    </div>
    <div class="ow-guide-text-warpper">
      <p class="ow-guide-owallet-img">
        <img class="ow-guide-owallet-img-img" :src="$t('owallet.item36')"/>
      </p>
    </div>
  </div>
</div>
</template>

<script>
import countTo from 'vue-count-to';
import ProgressNav from './Progress'
import SummaryNav from './Summary'
export default {
  name: "progresss",
  components: { 
    countTo,
    ProgressNav,
    SummaryNav
  },
  computed: {
    blockAmount() {
        return this.$store.getters.blockstonext || 0;
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
.owallet-ow-guide-text-container{
  display: flex;
  justify-content: center;
}
.ow-guide-text-class{
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.ow-guide-text-warpper{
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: auto;
}
.ow-guide-step{
  width: 552px;
  padding: 16px 24px;
  background:rgba(250,250,250,1);
  margin-bottom: 24px;
  margin-top: 24px;
}
.ow-guide-owallet-img{
  width: 600px;
  padding: 16px 0;
  margin-bottom: 24px;
}
.owallet-ow-guide-text-container .ow-guide-owallet-img-img{
  width: 100%;
  /* max-height: 300px; */
  border:1px solid #0000000f;
}
.ow-guide-note{
  width: 552px;
  padding: 16px 24px;
  background:rgba(72,163,255,0.06);
  margin-bottom: 24px;
  margin-top: 24px;
  text-align: left;
}
.ow-guide-blod-text{
  font-size:14px;
  font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:19px;
}
.ow-guide-normal-text{
  font-size:14px;
  font-family:NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:21px;
  text-align: left;
  word-break: break-word;
}
.el-tabs__item{
  color: #C2C2C2;
}
@media screen and (max-width:768px){
  .ow-guide-class{
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 0px !important;
  }
  .big-ow-guide-class{
    background: rgba(243,246,248,1);
  }
  .ow-guide-step{
    margin:0 16px;
    width: auto;
  }
  .ow-guide-note{
    margin:0 16px;
    width: auto;
  }
  .ow-guide-owallet-img-img{
    width: 100%;
    max-height: 1000px;
    border:1px solid #0000000f;
  }
  .ow-guide-text-class{
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
  }
  .ow-guide-owallet-img{
    margin:0 16px;
    padding: 0;
    width: auto;
  }
  .ow-guide-text-warpper{
    padding: 8px 0;
    margin: 0;
  }
  .guide-class {
      margin: 0 10px;
  }
}
</style>

