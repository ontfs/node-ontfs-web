<template>
  <div class="mobile-d-table-container">
    <div class="d-table-container">
      <div class="d-table-content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="$t('tab.balance')" name="first">{{
            $t('tab.balance')
          }}</el-tab-pane>
          <el-tab-pane :label="$t('tab.transactions')" name="second">{{
            $t('tab.transactions')
          }}</el-tab-pane>
          <!-- <el-tab-pane :label="$t('tab.transfer')" name="third">{{$t('tab.transfer')}}</el-tab-pane> -->
          <!-- <el-tab-pane v-if="(onchaindata.current_stake - onchaindata.init_pos)>0" :label="$t('tab.voter')" name="fouth">{{$t('tab.voter')}}</el-tab-pane> -->
        </el-tabs>
        <balance-nav v-if="balanceFlag" :address="address"></balance-nav>
        <transactions-nav
          v-if="transactionsFlag"
          :address="address"
        ></transactions-nav>
        <Transfers-nav v-if="transferFlag" :address="address"></Transfers-nav>
        <Voters-nav v-if="voterFlag" :pk="pk"></Voters-nav>
      </div>
    </div>
  </div>
</template>

<script>
import BalanceNav from '@/components/component/Balance.vue'
import TransactionsNav from '@/components/component/Transactions.vue'
import TransfersNav from '@/components/component/Transfers.vue'
import VotersNav from '@/components/component/Voters.vue'
export default {
  name: 'progresss',
  components: {
    BalanceNav,
    TransactionsNav,
    TransfersNav,
    VotersNav
  },
  props: {
    address: {
      type: String
    },
    pk: {
      type: String
    }
  },
  computed: {
    onchaindata() {
      return this.$store.getters.nodeonchaininfo || {}
    }
  },
  data() {
    return {
      activeName: 'first',
      balanceFlag: true,
      transactionsFlag: false,
      transferFlag: false,
      voterFlag: false
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab.name == 'first') {
        this.transferFlag = false
        this.voterFlag = false
        this.transactionsFlag = false
        this.balanceFlag = true
      }
      if (tab.name == 'second') {
        this.transferFlag = false
        this.voterFlag = false
        this.balanceFlag = false
        this.transactionsFlag = true
      }
      if (tab.name == 'third') {
        this.balanceFlag = false
        this.transactionsFlag = false
        this.voterFlag = false
        this.transferFlag = true
      }
      if (tab.name == 'fouth') {
        this.balanceFlag = false
        this.transactionsFlag = false
        this.transferFlag = false
        this.voterFlag = true
      }
    }
  }
}
</script>
<style>
.d-table-container {
  min-width: 1200px;
  max-width: 1200px;
  margin-top: 24px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
}
.d-table-content {
  min-width: 1136px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 39px;
  padding-bottom: 39px;
}
.tx-container a {
  color: #000;
}
.el-tabs__item {
  font-weight: 600;
}
.lang_en .el-tabs__item {
  font-family: NunitoSans-Bold, 'Avenir', Helvetica, Arial, sans-serif;
}
.el-tabs__header {
  padding-left: 10px;
  padding-right: 10px;
}
#tab-fouth {
}
</style>
