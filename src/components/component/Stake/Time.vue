<template>
  <div class="time-class">
    <progress-nav :rounds="rounds"></progress-nav>
    <summary-nav :days="days" :hours="hours"></summary-nav>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import ProgressNav from './Progress'
import SummaryNav from './Summary'
export default {
  name: "progresss",
  components: { 
    countTo,
    ProgressNav,
    SummaryNav
  },
  props: {
/*     percent: {
      type: Number
    }, */
    rounds: {
      type: Number
    },
    blocks: {
      type: Number
    },
    days: {
      type: Number
    },
    hours: {
      type: Number
    },
  },
  computed: {
    blockAmount() {
        return this.$store.getters.blockstonext || 0;
    },
  },
  data(){
    return{
      startVal:0,
      endVal:0,
    }
  },
  watch:{
    "blockAmount":function(newValue,oldValue){
      this.endVal = newValue
      if ( oldValue == 0 ) {
        this.startVal = newValue
      } else {
        this.startVal = oldValue
      }
    }
  }
};
</script>
<style>
.time-class{
  padding-top: 32px;
  padding-bottom:56px;
}
</style>

