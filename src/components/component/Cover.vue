<template>
  <div class="cover-container">
    <img class="cover-img" src="../../assets/img/footer/smalllogo.svg">
  </div>
</template>

<script>
export default {
  name: "cover",
};
</script>
<style>
  .cover-container{
    height: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .cover-img {
    width:100px;
    height:100px;
    position:relative;
    animation:mymove 2s infinite;
    -webkit-animation:mymove 2s infinite; /*Safari and Chrome*/
  }

  @keyframes mymove
  {
    100% {
      opacity: 1;
      transform:rotate(360deg);
    }
  }

  @-webkit-keyframes mymove /*Safari and Chrome*/
  {
    100% {
      opacity: 1;
      transform:rotate(360deg);
    }
  }
</style>

