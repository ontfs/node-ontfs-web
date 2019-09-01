<template>
  <div>
    <top-nav></top-nav>
    <el-main>
        <div class="detail">
          <back-nav :back="$t('back.back')" :title="$t('detail.title')"></back-nav>
          <detailoverview-nav :onchaindata="onchaindata" :offchaindata="offchaindata"></detailoverview-nav>
          <detailtable-nav :address="onchaindata.address" :pk="onchaindata.public_key"></detailtable-nav>
        </div>
    </el-main>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNav from "../common/Top";
import FooterNav from "../common/Footer";
import DetailoverviewNav from "../component/Detailoverview";
import DetailtableNav from "../component/Detailtable";
import BackNav from "../component/Goback";
export default {
  name: 'detail',
  components: {
    TopNav,
    FooterNav,
    DetailoverviewNav,
    DetailtableNav,
    BackNav
  },
  props: {
    msg: String
  },
  computed: {
    onchaindata() {
        return this.$store.getters.nodeonchaininfo || {};
    },
    offchaindata() {
        return this.$store.getters.nodeoffchaininfo || {};
    },
  },
  watch:{
  },
  data() {
    return {
    };
  },
  mounted() {
    this.getDetailOverview()
    window.scrollTo(0,0);
  },
  methods: {
    getDetailOverview(){
      let pk = this.$route.params.pk
      this.$store.dispatch("getNodeOnchainInfo",{pk:pk}).then();
      this.$store.dispatch("getNodeOffchainInfo",{pk:pk}).then();
    },
  },
  created(){
    if(this.$route.params.type == undefined){
      this.$router.push({
            name: 'detailtype',
            params: {pk: this.$route.params.pk,address:this.$route.params.address,type:'balance'}
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-main{
    padding:0;
}
.detail{
  background-color: #F3F6F8;
}
a:-webkit-any-link{
  text-decoration:none !important;
}
.s-color{
  color:#2fa3f1;
}
</style>
