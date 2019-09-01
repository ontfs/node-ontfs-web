<template>
  <div class="amount-container">
    <h1 class="amount-header">{{amount}}</h1>
    <p class="amount-text">{{text1}}</p>
    <p class="amount-text">{{text2}}</p>
  </div>
</template>

<script>
export default {
  name: "progresss",
  props: {
    amount: {
      type: Number
    },
    text1: {
      type: String
    },
    text2: {
      type: String
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
</style>

