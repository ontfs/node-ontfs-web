<template>
    <el-table
      :data="balancelist"
      style="width: 100%">
      <el-table-column
        prop="asset_name"
        :label="$t('balance.name')"
        >
      </el-table-column>
      <el-table-column
        prop="asset_type"
        :label="$t('balance.type')"
        >
      </el-table-column>
      <el-table-column
        prop="balance"
        :label="$t('balance.balance')"
        >
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: "progresss",
  props: {
    address: {
      type: String
    },
  },
  computed: {
    nativebalance() {
        return this.$store.getters.nativebalance || [];
    },
    oep4balance() {
        return this.$store.getters.oep4balance || [];
    },
    oep5balance() {
        return this.$store.getters.oep5balance || [];
    },
    oep8balance() {
        return this.$store.getters.oep8balance || [];
    }
  },
  watch:{
    "nativebalance":function(){
      for(let i=0;i<this.nativebalance.length;i++){
        if(this.nativebalance[i].asset_name=='ont'){
          this.nativebalance[i].asset_name='ONT'
          this.balancelist.push(this.nativebalance[i])
        }
        if(this.nativebalance[i].asset_name=='ong'){
          this.nativebalance[i].asset_name='ONG'
          this.balancelist.push(this.nativebalance[i])
        }
      }
      this.getOep4Balance()
    },
    "oep4balance":function(){
      for(let i=0;i<this.oep4balance.length;i++){
        this.balancelist.push(this.oep4balance[i])
      }
      this.getOep5Balance()
    },
    "oep5balance":function(){
      for(let i=0;i<this.oep5balance.length;i++){
        this.balancelist.push(this.oep5balance[i])
      }
      this.getOep8Balance()
    },
    "oep8balance":function(){
      for(let i=0;i<this.oep8balance.length;i++){
        this.balancelist.push(this.oep8balance[i])
      }
/*       console.log(this.nativebalance)
      console.log(this.oep4balance)
      console.log(this.oep5balance)
      console.log(this.oep8balance) */
      /* console.log(this.balancelist) */
    },
  },
  data() {
    return {
      balancelist:[]
    };
  },
  mounted() {
    this.getBalance(this.$route.params.address)
  },
  methods: {
    getBalance(){
      this.$store.dispatch("getNativeBalance",{address:this.$route.params.address}).then();
    },
    getOep4Balance(){
      this.$store.dispatch("getOep4Balance",{address:this.$route.params.address}).then();
    },
    getOep5Balance(){
      this.$store.dispatch("getOep5Balance",{address:this.$route.params.address}).then();
    },
    getOep8Balance(){
      this.$store.dispatch("getOep8Balance",{address:this.$route.params.address}).then();
    },
  },
};
</script>
<style>
.amount-text{
  text-align: left;
  font-size:16px;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:22px;
  margin: 0;
}
.lang_en .amount-text{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
.amount-header{
  font-size:48px;
  line-height: 87px;
  text-align: left;
  margin: 0;
  color:rgba(0,0,0,1);
  font-family: NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
}
.amount-container{
  padding-top: 100px;
}
.el-tabs__content{
  display: none;
}
</style>

