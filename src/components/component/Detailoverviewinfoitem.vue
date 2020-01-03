<template>
  <div class="item-wrapper">
    <el-row>
      <el-col :span="6" :md="7" :sm="9" :xs="9">
        <div class="item-title">{{ title }} :</div>
      </el-col>
      <el-col :span="18" :md="17" :sm="15" :xs="15">
        <div v-if="texttype == '1'" class="item-text">{{ text }}</div>
        <div v-if="texttype == '2'" class="item-text">
          {{ $HelperTools.toFinancialVal(num) }}
        </div>
        <div v-if="texttype == 'ont'" class="item-text">
          {{ $HelperTools.toFinancialVal(num) }} ONT
        </div>
        <div v-if="texttype == 'address'" class="item-text">
          <a
            class="s-color"
            target="_blank"
            :href="domain + '/address/' + text"
            >{{ text }}</a
          >
        </div>
        <div v-if="texttype == 'ontid'" class="item-text">
          <a
            class="s-color"
            target="_blank"
            :href="domain + '/ontid/' + text"
            >{{ text }}</a
          >
        </div>
        <div v-if="texttype == 'serverTime'" class="item-text">
          {{ $HelperTools.getTransDate(num + '') }}
        </div>
        <!-- getShowDate -->
        <div v-if="texttype == 'pdps'" class="item-text">
          {{ $HelperTools.getShowDate(num + '') }}
        </div>
        <div v-if="texttype == '4'" class="item-text">
          {{ $HelperTools.toFinancialVal(num + '') }} ONG
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'progresss',
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
    texttype: {
      type: String
    }
  },
  data() {
    return {
      domain: process.env.VUE_APP_DOMAIN
    }
  }
}
</script>
<style>
.item-wrapper {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.item-title {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 36px;
}
.item-text {
  font-size: 14px;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 20px;
  padding: 10px 0;
  word-break: break-word;
}
.item-text-p {
  font-size: 14px;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 20px;
  padding: 10px 0;
}
.s-color {
  color: #2fa3f1;
}
</style>
