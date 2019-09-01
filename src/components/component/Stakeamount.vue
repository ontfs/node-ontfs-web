<template>
  <div class="stake-amount-container">
    <h1 class="stake-amount-header">{{$HelperTools.toFinancialVal(amountstake)}}</h1>
    <p class="stake-amount-text">{{text1}}</p>
    <h1 class="stake-amount-header">{{percent}}</h1>
    <p class="stake-amount-text">{{text2}}</p>
  </div>
</template>

<script>
export default {
  name: "progresss",
  props: {
    amountstake: {
      type: Number
    },
    amountnostake: {
      type: Number
    },
    text1: {
      type: String
    },
    text2: {
      type: String
    },
  },
  mounted(){
/*     console.log(this.amountstake)
    console.log(this.amountnostake) */
    /* this.percent = Math.round(this.amountstake*100/(this.amountstake+this.amountnostake)) + "%" */
    this.percent = (this.amountstake*100/(this.amountstake+this.amountnostake)).toFixed(3) + "%"
  },
  data() {
    return {
      percent: "",
    }
  },
};
</script>
<style>
.stake-amount-text{
  line-height:19px;
  font-size:14px;
  font-weight:bold;
  color:rgba(0,0,0,1);
  margin: 0;
  padding:0 0 16px
}
.lang_en .stake-amount-text{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
.stake-amount-header{
  line-height:32px;
  font-size:24px;
  font-weight:400;
  margin: 0;
  padding:30px 0 0;
  color:#000;
}
.stake-amount-container{
  text-align:left;
}
</style>

