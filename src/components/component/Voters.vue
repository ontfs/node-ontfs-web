<template>
  <div class="tx-container">
    <el-table
      :data="voterList"
      style="width: 100%">
      <el-table-column
        prop="address"
        :label="$t('voter.address')">
        <template slot-scope="scope">
          <a class="s-color" target="_blank" :href="'https://explorer.ont.io/address/'+scope.row.address">{{scope.row.address}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="candidate_pos"
        :label="$t('voter.vote')">
        <template slot-scope="scope">
          {{scope.row.candidate_pos + scope.row.consensus_pos + scope.row.new_pos}} ONT
        </template>
      </el-table-column>
      <el-table-column
        prop="candidate_pos"
        :label="$t('voter.percent')">
        <template slot-scope="scope">
          {{getPercent(scope.row.candidate_pos + scope.row.consensus_pos+scope.row.new_pos)}}
        </template>
      </el-table-column>
    </el-table>
    <div class="tx-block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :small="isSmall"
        :page-sizes="[10, 20]"
        :page-size="10"
        layout="sizes, prev, pager, next"
        :total="voterTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "progresss",
  props: {
    amount: {
      type: Number
    },
    text1: {
      type: String
    },
    text2: {
      type: String
    },
  },
  computed: {
    voterList() {
        return this.$store.getters.voterList.list || [];
    },
    voterTotal() {
        return this.$store.getters.voterList.total || 0;
    },
    onchaindata() {
        return this.$store.getters.nodeonchaininfo || {};
    },
    isSmall(){
      if(document.body.clientWidth < 800){
        return true
      }else{
        return false
      }
    }
  },
  watch:{
    "voterTotal":function() {
      console.log(this.txtotal)
    }
  },
  data() {
    return {
      pagesize:10,
      pageno:1,
      currentPage:1
    };
  },
  mounted() {
    this.getVoterList(this.pagesize,this.pageno)
  },
  methods: {
    getPercent(amount){
      if(this.onchaindata.current_stake == undefined){
        return "No Data"
      }else{
        let result = (amount*100/this.onchaindata.current_stake).toFixed(3) + "%"
        return result
      }
      
    },
    getVoterList($pagesize,$pageno){
      this.$store.dispatch("getVoterList",{pk:this.$route.params.pk,pagesize:$pagesize,pageno:$pageno}).then();
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize = val
        this.getVoterList(this.pagesize,this.pageno)
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageno = val
        this.getVoterList(this.pagesize,this.pageno)

    }
  },
};
</script>
<style>
.tx-block{
  padding-top: 21px;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
}
.s-color{
  color:#2fa3f1 !important;
}
</style>

