<template>
  <div class="item-wrapper">
    <el-row>
      <el-col :span="5" :md="6" :sm="8" :xs="8">
        <div class="item-title">{{title}} :</div>
      </el-col>
      <el-col :span="19" :md="18" :sm="16" :xs="16">
        <div v-if="texttype=='1'" class="item-text">{{text}}</div>
        <div v-if="texttype=='2'" class="item-text">{{$HelperTools.toFinancialVal(num)}}</div>
        <div v-if="texttype=='ont'" class="item-text">{{$HelperTools.toFinancialVal(num)}} ONT</div>
        <div v-if="texttype=='address'" class="item-text"><a class="s-color" target="_blank" :href="'https://explorer.ont.io/address/'+text">{{text}}</a></div>
        <div v-if="texttype=='ontid'" class="item-text"><a class="s-color" target="_blank" :href="'https://explorer.ont.io/ontid/'+text">{{text}}</a></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "progresss",
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    num: {
      type: Number
    },
    texttype:{
      type: String
    }
  },
};
</script>
<style>
.item-wrapper{
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.item-title{
  font-size:14px;
  font-weight:400;
  color:rgba(0,0,0,1);
  line-height:36px;
}
.item-text{
  font-size:14px;
  font-weight:400;
  color:rgba(128,128,128,1);
  line-height: 20px;
  padding: 10px 0;
  word-break: break-word;
}
.item-text-p{
  font-size: 14px;
  font-weight: 400;
  color: rgba(128,128,128,1);
  line-height: 20px;
  padding: 10px 0;
}
.s-color{
  color:#2fa3f1;
}
</style>

