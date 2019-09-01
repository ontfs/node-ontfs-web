<template>
  <div>
    <top-nav></top-nav>
    <el-main>
        <div class="home">
            <map-nav mapWidth="100%" mapHeight="480px"></map-nav>
            <summary-nav></summary-nav>
            <nodelist-nav></nodelist-nav>
            <cobuild-nav></cobuild-nav>
        </div>
    </el-main>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNav from "../common/Top";
import FooterNav from "../common/Footer";
import MapNav from "../component/Map";
import SummaryNav from "../component/Summary";
import NodelistNav from "../component/Nodelist";
import CobuildNav from "../component/Cobuild";
import CoverNav from "@/components/component/Cover.vue";
export default {
  name: 'home',
  components: {
    TopNav,
    FooterNav,
    MapNav,
    SummaryNav,
    NodelistNav,
    CobuildNav,
    CoverNav
  },
  props: {
    msg: String
  },
  created() {
    window.scrollTo(0,0);
  },
  mounted() {
    window.scrollTo(0,0);
  },
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
</style>
