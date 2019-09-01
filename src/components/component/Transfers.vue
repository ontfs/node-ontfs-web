<template>
  <div class="tx-container">
    <el-table
      :data="transList"
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
        width="90">
        <template slot-scope="scope">
          {{scope.row.confirm_flag ==1 ?'Confirmed':'Failed'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="confirm_flag"
        :label="$t('tx.result')"
        width="100">
        <template slot-scope="scope">
          {{scope.row.confirm_flag ==1 ?'Success':'Failed'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="block_height"
        :label="$t('tx.block')"
        width="100">
        <template slot-scope="scope">
          <a target="_blank" :href="'https://explorer.ont.io/block/'+scope.row.block_height" class="transfer-height-text click-able-color">{{scope.row.block_height}}</a>
        </template>
      </el-table-column>
<!--       <el-table-column
        prop="tx_time"
        :label="$t('tx.time')">
        <template slot-scope="scope">
          {{$HelperTools.getTransDate(scope.row.tx_time)}}
        </template>
      </el-table-column> -->
      <el-table-column
        prop="transfers[0].from_address"
        :label="$t('tx.from')"
        width="100">
        <template slot-scope="scope">
          <div>
            <a  :class="scope.row.transfers[0].from_address == $route.params.address? 'owner-address':'no-owner-address'" target="_blank" :href="'https://explorer.ont.io/address/'+scope.row.transfers[0].from_address">
              {{scope.row.transfers[0].from_address.substr(0,5)}}...
            </a>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="transfers[0].to_address"
        :label="$t('tx.to')"
        width="100">
        <template slot-scope="scope">
          <a :class="scope.row.transfers[0].to_address == $route.params.address? 'owner-address':'no-owner-address'" target="_blank" :href="'https://explorer.ont.io/address/'+scope.row.transfers[0].to_address">
            {{scope.row.transfers[0].to_address.substr(0,5)}}...
          </a>
        </template>
      </el-table-column>
      <el-table-column
        prop="transfers[0].from_address"
        :label="$t('tx.way')"
        width="70">
        <template slot-scope="scope">
          <div class="out-class" v-if="scope.row.transfers[0].from_address == $route.params.address">OUT</div>
          <div class="in-class" v-else>IN</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="transfers[0].amount"
        :label="$t('tx.amount')">
      </el-table-column>
      <el-table-column
        prop="transfers[0].asset_name"
        :label="$t('tx.token')">
        <template slot-scope="scope">
          <span class="transfer-token-name">{{scope.row.transfers[0].asset_name}}</span>
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
    transList() {
        return this.$store.getters.transferList.list || [];
    },
    txTotal() {
        return this.$store.getters.transferList.total || 0;
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
    this.getTransList(this.pagesize,this.pageno)
  },
  methods: {
    getTransList($pagesize,$pageno){
      this.$store.dispatch("getTransferList",{address:this.$route.params.address,pagesize:$pagesize,pageno:$pageno}).then();
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize = val
        this.getTransList(this.pagesize,this.pageno)
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageno = val
        this.getTransList(this.pagesize,this.pageno)

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
.owner-address{
  font-size:14px;
  font-family:NunitoSans;
  font-weight:400;
  color:rgba(72,163,255,1) !important;
  line-height:19px;
}
.no-owner-address{
  font-size:14px;
  font-family:NunitoSans;
  font-weight:400;
  color:rgba(0,0,0,1) !important;
  line-height:19px;
}
.out-class{
  width:44px;
  height:22px;
  border-radius:11px;
  border:1px solid rgba(219,140,37,1);
  font-size:12px;
  font-family:NunitoSans;
  font-weight:bold;
  color:rgba(219,140,37,1);
  line-height:20px;
  text-align: center;
}
.in-class{
  width:43px;
  height:22px;
  border-radius:11px;
  border:1px solid rgba(54,203,71,1);
  font-size:12px;
  font-family:NunitoSans;
  font-weight:bold;
  color:rgba(54,203,71,1);
  line-height:20px;
  text-align: center;
}
.transfer-token-name{
  text-transform : uppercase
}
.click-able-color{
  color:rgba(72,163,255,1) !important;
}
.transfer-height-text{
  font-size:14px;
  font-family:NunitoSans;
  font-weight:400;
  line-height:19px;
}
</style>

