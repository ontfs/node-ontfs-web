<template>
  <div class="nodes-list-container">
    <div class="nodes-list-content">
      <div class="nodes-list-wrapper">
        <h1 class="nodes-list-title">{{$t('nodelist.cnode')}}</h1>
        <cnode-nav :data="c_data"></cnode-nav>
      </div>
      <div class="nodes-list-wrapper">
        <h1 class="nodes-list-title">{{$t('nodelist.nnode')}}</h1>
        <nnode-nav :ndate="n_data"></nnode-nav>
      </div>
    </div>
  </div>
</template>

<script>
import CnodeNav from "../component/Cnode";
import NnodeNav from "../component/Nnode";
export default {
  name: "Nodelist",
  components: {
    CnodeNav,
    NnodeNav,
  },
  computed: {
    nodelist() {
        return this.$store.getters.NodeList || [];
    },
    offnodelist() {
        return this.$store.getters.offNodeList || [];
    },
  },
  data() {
    return {
      c_data: [],
      n_data: []
    };
  },
  watch:{
      "offnodelist":function(){
        this.getNodeList()
      },
      "nodelist":function() {
        /* console.log(this.nodelist) */
        for(let i=0;i<this.nodelist.length;i++){
          for(let j=0;j<this.offnodelist.length;j++){
            if(this.nodelist[i].public_key == this.offnodelist[j].public_key){
              this.nodelist[i].region = this.offnodelist[j].region
              this.nodelist[i].social_media = this.offnodelist[j].social_media
              this.nodelist[i].website = this.offnodelist[j].website
            }
          }
          if(this.nodelist[i].status == 2){
            this.c_data.push(this.nodelist[i])
          }
          if(this.nodelist[i].status == 1){
            this.n_data.push(this.nodelist[i])
          }
        }
/*         console.log(this.c_data)
        console.log(this.n_data) */
      }
  },
  mounted() {
    this.getoffNodeList()
  },
  methods: {
    getNodeList(){
        this.$store.dispatch("getNodeList").then();
    },
    getoffNodeList(){
        this.$store.dispatch("getOffNodeList").then();
    },
  }
};
</script>
<style>
.nodes-list-container{
  padding-top: 100px;
  width: 100%;
  background-color: #F3F6F8;
}
.nodes-list-content{
  padding-left: 30px;
  padding-right: 30px;
  max-width:1200px;
  margin: auto;
}
.nodes-list-title{
  text-align: left;
  font-size:24px;
  font-weight:bold;
  color:rgba(0,0,0,1);
  line-height:32px;
  margin: 0;
  padding-bottom:16px;
}
.lang_en .nodes-list-title{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
.nodes-list-wrapper{
  padding-bottom:48px;
}
</style>

