<template>
  <div class="tx-container">
    <el-table
      :data="txList"
      style="width: 100%">
      <el-table-column
        prop="tx_hash"
        :label="$t('tx.hash')"
        width="180">
        <template slot-scope="scope">
          <a class="s-color" target="_blank" :href="'https://explorer.ont.io/transaction/'+scope.row.tx_hash">{{scope.row.tx_hash.substr(0,8)+'...'+scope.row.tx_hash.substr(56,8)}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="confirm_flag"
        :label="$t('tx.status')"
        width="180">
        <template slot-scope="scope">
          {{scope.row.confirm_flag ==1 ?'Confirmed':'Failed'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="fee"
        :label="$t('tx.fee')"
        width="180">
        <template slot-scope="scope">
          {{scope.row.fee}} ONG
        </template>
      </el-table-column>
      <el-table-column
        prop="block_height"
        :label="$t('tx.block')">
        <template slot-scope="scope">
          <a target="_blank" :href="'https://explorer.ont.io/block/'+scope.row.block_height">{{scope.row.block_height}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="tx_time"
        :label="$t('tx.time')">
        <template slot-scope="scope">
          {{$HelperTools.getTransDate(scope.row.tx_time)}}
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
        :total="txTotal">
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
    txList() {
        return this.$store.getters.txList.list || [];
    },
    txTotal() {
        return this.$store.getters.txList.total || 0;
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

  },
  data() {
    return {
      pagesize:10,
      pageno:1,
      currentPage:1
    };
  },
  mounted() {
    this.getTxList(this.pagesize,this.pageno)
  },
  methods: {
    getTxList($pagesize,$pageno){
      this.$store.dispatch("getTxList",{address:this.$route.params.address,pagesize:$pagesize,pageno:$pageno}).then();
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize = val
        this.getTxList(this.pagesize,this.pageno)
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageno = val
        this.getTxList(this.pagesize,this.pageno)

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

