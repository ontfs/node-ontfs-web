<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"  :xs="12">
        <div class="grid-content bg-purple">
          <amount-nav :amount="nodesummary.total_node_count" :text1="$t('summary.totaltext1')" :text2="$t('summary.totaltext2')"></amount-nav>
        </div>
      </el-col>
      <el-col :span="6"  :xs="12">
        <div class="grid-content bg-purple">
          <amount-nav :amount="nodesummary.consensus_node_count" :text1="$t('summary.consensustext1')" :text2="$t('summary.consensustext2')"></amount-nav>
        </div>
      </el-col>
      <el-col :span="6"  :xs="12">
        <div class="grid-content bg-purple">
          <amount-nav :amount="nodesummary.candidate_node_count" :text1="$t('summary.candidatetext1')" :text2="$t('summary.candidatetext2')"></amount-nav>
        </div>
      </el-col>
      <el-col :span="6"  :xs="12">
        <div class="grid-content bg-purple">
          <amount-nav :amount="nodesummary.sync_node_count" :text1="$t('summary.synchronoustext1')" :text2="$t('summary.synchronoustext2')"></amount-nav>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AmountNav from "@/components/component/Nodeamount.vue";
export default {
  name: "progresss",
  props: {
    percent: {
      type: Number
    },
    blocks: {
      type: Number
    },
    nodesummary: {
      type: Object
    },
  },
  components: {
      AmountNav
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
</style>

