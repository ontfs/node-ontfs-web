<template>
  <div class="overview-container">
    <div class="overview-content">
      <div class="overview-content-left">
        <DetailStorageViewInfo-nav
          v-if="$route.params.type === 'storage'"
          :storagedata="storagedata"
        ></DetailStorageViewInfo-nav>
        <detailoverviewinfo-nav
          :onchaindata="onchaindata"
          :offchaindata="offchaindata"
          v-else
        ></detailoverviewinfo-nav>
      </div>
      <div class="overview-content-right">
        <detailmap-nav mapWidth="440px" mapHeight="440px"></detailmap-nav>
      </div>
    </div>
  </div>
</template>

<script>
import DetailoverviewinfoNav from '../component/Detailoverviewinfo'
import DetailStorageViewInfoNav from '../component/DetailStorageViewInfo'
import DetailmapNav from '../component/Detailmap'
export default {
  name: 'detailoverview',
  components: {
    DetailoverviewinfoNav,
    DetailmapNav,
    DetailStorageViewInfoNav
  },
  props: {
    onchaindata: {
      type: Object,
      default: function() {
        return {}
      }
    },
    offchaindata: {
      type: Object,
      default: function() {
        return {}
      }
    },
    storagedata: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>
<style>
.overview-container {
  min-width: 1200px;
  max-width: 1200px;
  background-color: #fff;
  margin: auto;
}
.overview-content {
  display: flex;
}
.overview-content a {
  color: rgba(128, 128, 128, 1);
}
.overview-content-left {
  width: 50%;
  padding-left: 40px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 32px;
  text-align: left;
}
.overview-content-right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}
</style>
