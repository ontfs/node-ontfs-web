<template>
    <el-header>
        <el-menu  class="el-menu-demo" mode="horizontal">
            <el-row>
                <div class="header-wrapper" style="display: flex;justify-content: space-between;">
                  <div>
                      <a href="/"><img style=" height: 23px;margin: 17px 0 0 20px;"src="../../assets/img/top/logo.png" /></a>
                  </div>
<!--                   <div>
                      <div>
                      <el-submenu index="2" >
                          <template slot="title"><span class="title-lang"><img class="lang-img" src="../../assets/img/top/globe.png" /><span class="lang-show">Language</span></span></template>
                          <el-menu-item index="en">English</el-menu-item>
                          <el-menu-item index="zh">中文</el-menu-item>
                          <el-menu-item index="ko">한국어</el-menu-item>
                      </el-submenu>
                      </div>
                  </div> -->
                  <div>
                    <el-dropdown @command="handleCommand" trigger="click">
                      <span class="el-dropdown-link">
                        <span class="title-lang">
                          <img class="lang-img" src="../../assets/img/top/globe.png" />
                          <span class="hide-when-mobile">Language </span>
                          <i class="el-icon-arrow-down el-icon--right hide-when-mobile"></i>
                        </span>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="en">English</el-dropdown-item>
                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                        <el-dropdown-item command="ko">한국어</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
            </el-row>
        </el-menu>
    </el-header>
</template>
<script>

import LangStorage from './../../utils/lang'
  export default {
    data() {
      return {
        activeIndex: '1',
        language:""
      };
    },
    mounted() {
        this.langInit()
    },
    methods: {
      handleCommand(command) {
        this.changeLanguage(command)
      },
      changeLanguage($lang){
        this.$i18n.locale = $lang
        LangStorage.setLang(this.$i18n.locale)
        document.body.classList.remove("lang_zh");
        document.body.classList.remove("lang_en");
        document.getElementById("app").classList.remove("lang_en");
        document.getElementById("app").classList.remove("lang_zh");
        document.body.classList.add("lang_"+this.getLocale());
        document.getElementById("app").classList.add("lang_"+this.getLocale());
      },
      langInit(){
        document.body.classList.remove("lang_zh");
        document.body.classList.remove("lang_en");
        document.getElementById("app").classList.remove("lang_en");
        document.getElementById("app").classList.remove("lang_zh");
        document.body.classList.add("lang_"+this.getLocale());
        document.getElementById("app").classList.add("lang_"+this.getLocale());      
      },
      getLocale(){
        if(this.$i18n.locale == "zh"){
          return "zh"
        } else {
          return "en"
        }
      }
    }
  }
</script>
<style>
.el-header{
    padding:0;
    background-color: #000;
    height: 60px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1001;
}
.el-header ul{
    background-color: #000;
}
.el-submenu__title{
    color:#fff;
    width: 150px;
    right: 0;
    padding-left:10px;
    padding-right:10px;
}
.el-submenu__title:hover{
    background-color: #6f6f6f;
}
.el-submenu__title i {
    color: #ffffff;
}
.header-title{
    color:#fff;
    font-weight:600;
    text-align:left;
    font-size: 30px;
    line-height: 56px;
}
a:visited{
  text-decoration: none;
}
a:-webkit-any-link{
  text-decoration: none;
}
.title-lang{
    top: -5%;
    position: relative;
}
.el-menu.el-menu--horizontal{
  border-bottom:0px;
}
.el-submenu__title:hover{
  background-color: #000000;
}
.el-menu--horizontal .el-menu .el-menu-item{
  font-family: NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
}
.lang-img{
  width: 12px;
  transform: translate(-10px, 1px);
}
.el-submenu{
/*   display: flex;
  justify-content: flex-end; */
}
.el-dropdown-link,.el-dropdown-selfdefine{
  font-size:14px;
  font-family:NunitoSans;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:19px;
}
.el-dropdown{
  top: 50%;
  transform: translateY(-50%)
}
.el-dropdown{
  cursor: pointer;
}
</style>