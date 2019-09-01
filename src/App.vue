<template>
  <div id="app">
    <el-container direction = "vertical">
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import TopNav from "./components/common/Top";
import FooterNav from "./components/common/Footer";
import "./assets/css/index.css"
export default {
  name: 'app',
  components: {
    TopNav,
    FooterNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
    display: block;
    margin: 0px;
}
/* .el-container{
  min-width: 960px;
} */
</style>
