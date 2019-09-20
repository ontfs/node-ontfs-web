<template>
<div class="onto-on-guide-text-container">
  <div class="on-guide-text-class">
    <div class="on-guide-text-warpper">
      <p class="on-guide-step on-guide-normal-text">
        <span class="on-guide-blod-text">{{$t('onto.item1')}}</span>
        {{$t('onto.item2')}}<a style="color: #409EFF;" :href="$t('onto.ontoappurl')" target="_blank">{{$t('onto.item3')}}</a><span v-if="$i18n.locale == 'ko'">{{$t('onto.item3ko')}}</span>
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" style="width:100%" :src="$t('onto.item4')"/>
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-step on-guide-normal-text">
        <span class="on-guide-blod-text">{{$t('onto.item5')}}</span>
        {{$t('onto.item6')}}<span class="on-guide-blod-text" >{{$t('onto.item7')}}</span>{{$t('onto.item8')}}<span class="on-guide-blod-text" >{{$t('onto.item9')}}</span>{{$t('onto.item10')}}
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" :src="$t('onto.item11')"/>
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-step on-guide-normal-text">
        <span class="on-guide-blod-text">{{$t('onto.item12')}}</span>
        {{$t('onto.item13')}}<span class="on-guide-blod-text" >{{$t('onto.item14')}}</span>{{$t('onto.item15')}}
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" :src="$t('onto.item16')"/>
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-step on-guide-normal-text">
        <span class="on-guide-blod-text">{{$t('onto.item17')}}</span>
        {{$t('onto.item18')}}<span class="on-guide-blod-text" >{{$t('onto.item19')}}</span>{{$t('onto.item20')}}
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-note on-guide-normal-text">
        <span class="on-guide-blod-text">{{$t('onto.item21')}}</span>
        {{$t('onto.item22')}}<span class="on-guide-blod-text" >{{$t('onto.item23')}}</span>{{$t('onto.item24')}}
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" :src="$t('onto.item25')"/>
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" :src="$t('onto.item26')"/>
      </p>
    </div>    
    <div class="on-guide-text-warpper">
      <p class="on-guide-step on-guide-normal-text">
        <span class="on-guide-blod-text">{{$t('onto.item27')}}</span>
        {{$t('onto.item28')}}<span class="on-guide-blod-text" >{{$t('onto.item29')}}</span>{{$t('onto.item30')}}
      </p>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" :src="$t('onto.item31')"/>
      </p>
    </div>  
    <div class="on-guide-text-warpper">
      <p class="on-guide-note on-guide-normal-text">
        {{$t('onto.item32')}}<span class="on-guide-blod-text" >{{$t('onto.item33')}}</span>{{$t('onto.item34')}}<span class="on-guide-blod-text" >{{$t('onto.item35')}}</span>{{$t('onto.item36')}}
      </p>
    </div> 
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" :src="$t('onto.item37')"/>
      </p>
    </div> 
    <div class="on-guide-text-warpper">
      <div class="on-guide-note">
        <p class=" on-guide-normal-text">
          <span class="on-guide-blod-text">{{$t('onto.item38')}}</span>
        </p>
        <p class=" on-guide-normal-text">
          {{$t('onto.item39')}}
          <span class="on-guide-blod-text" >{{$t('onto.item40')}}</span>
          {{$t('onto.item41')}}
          <span class="on-guide-blod-text" >{{$t('onto.item42')}}</span>
          {{$t('onto.item43')}}
          <span class="on-guide-blod-text" >{{$t('onto.item44')}}</span>
          {{$t('onto.item45')}}
          <span class="on-guide-blod-text" >{{$t('onto.item46')}}</span>
          {{$t('onto.item47')}}
          <span class="on-guide-blod-text" >{{$t('onto.item48')}}</span>
          {{$t('onto.item49')}}
        </p>
      </div>
    </div>
    <div class="on-guide-text-warpper">
      <p class="on-guide-onto-img">
        <img class="on-guide-onto-img-img" :src="$t('onto.item50')"/>
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
.onto-on-guide-text-container{
  display: flex;
  justify-content: center;
}
.on-guide-text-class{
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.on-guide-text-warpper{
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: auto;
}
.on-guide-step{
  width: 552px;
  padding: 16px 24px;
  background:rgba(250,250,250,1);
  margin-bottom: 24px;
  margin-top: 24px;
}
.on-guide-onto-img{
  width: 600px;
  padding: 16px 0;
  margin-bottom: 24px;
}
.onto-on-guide-text-container .on-guide-onto-img-img{
  /* max-height: 300px; */
  border:1px solid #0000000f;
}
.on-guide-note{
  width: 552px;
  padding: 16px 24px;
  background:rgba(72,163,255,0.06);
  margin-bottom: 24px;
  margin-top: 24px;
  text-align: left;
}
.on-guide-blod-text{
  font-size:14px;
  font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:19px;
}
.on-guide-normal-text{
  font-size:14px;
  font-family: NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
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
  .on-guide-class{
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 0px !important;
  }
  .big-on-guide-class{
    background: rgba(243,246,248,1);
  }
  .on-guide-step{
    margin:0 16px;
    width: auto;
  }
  .on-guide-note{
    margin:0 16px;
    width: auto;
  }
  .on-guide-onto-img-img{
    width: 100%;
    max-height: 1000px;
    border:1px solid #0000000f;
  }
  .on-guide-text-class{
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
  }
  .on-guide-onto-img{
    margin:0 16px;
    padding: 0;
    width: auto;
  }
  .on-guide-text-warpper{
    padding: 8px 0;
    width: 100%;
  }
  .guide-class {
      margin: 0 10px;
  }
}
</style>

