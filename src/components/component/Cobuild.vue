<template>
  <div class="cobuild-container">
      <div class="cobuild-content">
          <el-row>
              <el-col :span="6" :xs="0"><div class="cobuild-fill">1</div></el-col>
              <el-col :span="12" :xs="24">
                  <el-divider content-position="center">
                    <div class="cobuild-title">{{$t('cobuild.title')}}</div>
                  </el-divider>
              </el-col>
              <el-col :span="6" :xs="0"><div class="cobuild-fill">1</div></el-col>
          </el-row>
          <el-row style="padding-top:30px">
              <el-col :span="2" :xs="0"><div class="cobuild-fill">1</div></el-col>
              <el-col :span="4" :xs="24">
                  <a target="_blank" href="http://www.beekuaibao.com/"><img src="../../assets/img/cobuild/logo-bikuaibao.png" /></a>
              </el-col>
              <el-col :span="4" :xs="24">
                  <a target="_blank" href="https://blocks.tech/"><img src="../../assets/img/cobuild/logo-blockstech.png" /></a>
              </el-col>
              <el-col :span="4" :xs="24">
                  <a target="_blank" href="http://dappbirds.com/index"><img src="../../assets/img/cobuild/logo-dappbirds.png" /></a>
              </el-col>
              <el-col :span="4" :xs="24">
                  <a target="_blank" href="https://lichang.io/"><img src="../../assets/img/cobuild/logo-lichang.png" /></a>
              </el-col>
              <el-col :span="4" :xs="24">
                  <a target="_blank" href="http://www.blockdata.club/"><img src="../../assets/img/cobuild/logo-talian.png" /></a>
              </el-col>
              <el-col :span="2" :xs="0"><div class="cobuild-fill">1</div></el-col>
          </el-row>
      </div>
  </div>
</template>
<script>

</script>
<style>
.cobuild-container{
  padding-top: 40px;
  width: 100%;
  background-color: #fff;
  padding-bottom: 49px;
}
.cobuild-content{
  max-width:1200px;
  margin: auto;
}
.cobuild-title{
  font-size:32px;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:43px;
}
.lang_en .cobuild-title{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
.cobuild-fill{
    opacity: 0;
}
</style>