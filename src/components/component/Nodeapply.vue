<template>
  <div class="apply-container">
    <div class="apply-content">
      <div class="apply-wrapper">
        <a style="width:100%" target="_blank" href="https://docs.google.com/forms/d/1Z0yI9_tngpauiFdMutCerlcN5aFZDolrMlDasRlFfBM/edit#response=ACYDBNgJ1TXOG5EMXtxTE7TwLD3zLbEMMBiHsVNnZB0ac6AtZ1l2CZ1xiFlDTQ">
          <div class="apply-text">
            <span>{{$t('summary.applynow')}}  <img class="app-img-right" src="../../assets/img/apply/aright.png" /></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progresss",
  props: {
    amount: {
      type: String
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
.apply-container{
  background-color: #fff;
  height: 135px;
  width: 100%;
}
.apply-content{
  background-color: #000;
  height: 100px;
  width: 100%;
  transform: translateY(82px);
  border-radius: 13px;
}
.apply-content:hover .apply-wrapper{
  background-size: 106%;
}
.apply-wrapper{
  background-image: url(../../assets/img/apply/AdobeStock_1255654972.png);
  height: 100%;
  border-radius: 13px;
  background-size: 100%;
  background-position: center;
  transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out; /* Firefox 4 */
  -webkit-transition: all .3s ease-in-out; /* Safari 和 Chrome */
  -o-transition: all .3s ease-in-out; /* Opera */
}
.app-img-right{
  width: 19px;
  transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out; /* Firefox 4 */
  -webkit-transition: all .3s ease-in-out; /* Safari 和 Chrome */
  -o-transition: all .3s ease-in-out; /* Opera */
}
.apply-content:hover  .app-img-right{
  width: 19px;
  transform: translateX(5px)
}
.apply-wrapper a:focus{
  outline: -webkit-focus-ring-color auto 0px;
}
.apply-wrapper a:-webkit-any-link{
  text-decoration: none;
}
.apply-text{
  line-height:100px;
  font-size:24px;
  font-weight:800;
  color:rgba(255,255,255,1);
  cursor: pointer;
}
.lang_en .apply-text{
    font-family: NunitoSans-Bold,'Avenir', Helvetica, Arial, sans-serif;
}
</style>

