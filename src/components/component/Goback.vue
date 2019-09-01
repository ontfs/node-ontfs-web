<template>
  <div class="goback-container">
    <i class="el-icon-arrow-left back-icon"></i> <span class="back-text back-left" @click="goBack()">{{back}}  </span> <span class="back-text back-line">  |  </span> <span class="back-text back-right">  {{title}}</span>
  </div>
</template>
<script>
  export default {
    props: {
      back: {
        type: String
      },
      title: {
        type: String
      }
    },
    methods: {
      goBack() {
      /*   window.history.back(-1);  */
        this.$router.push({
              name: 'Home'
            })
      }
    }
  }
</script>
<style>
.goback-container{
  max-width:1200px;
  margin: auto;
  text-align: left;
  padding-top:48px;
  padding-bottom:16px;
}
.back-text{
  font-size:14px;
  font-weight:600;
  color:rgba(128,128,128,1);
  line-height:20px;
}
.lang_en .back-text{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
.back-icon{
  font-size: 10px;
  margin:10px 10px 10px 0;
  font-weight: 600;
  color:rgba(128,128,128,1);
}
.lang_en .back-icon{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
.back-left{
  margin-right: 16px;
  cursor: pointer;
}
.back-right{
  margin-left: 16px;
}
</style>