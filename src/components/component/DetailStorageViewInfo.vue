<template>
  <div>
    <detailitem-nav
      :title="$t('detail.name')"
      :text="storagedata.name"
      texttype="1"
    ></detailitem-nav>
    <!-- <detailitem-nav
      :title="$t('detail.rank')"
      :num="storagedata.node_rank"
      texttype="2"
    ></detailitem-nav> -->
    <detailitem-nav
      :title="$t('detail.position')"
      :text="storagedata.region"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.address')"
      :text="storagedata.address"
      texttype="address"
    ></detailitem-nav>
    <detailitem-nav
      v-if="storagedata.website"
      :title="$t('detail.website')"
      :text="storagedata.website"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      v-if="storagedata.social"
      :title="$t('detail.social')"
      :text="storagedata.social"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.pk')"
      :text="storagedata.public_key"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.ontid')"
      :text="storagedata.ont_id"
      texttype="ontid"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('nodelist.totalCap')"
      :text="storagedata.volume"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('nodelist.remainCap')"
      :text="storagedata.rest_vol"
      texttype="1"
    ></detailitem-nav>
    <!-- service_time -->
    <detailitem-nav
      :title="$t('nodelist.serverTime')"
      :num="storagedata.service_time"
      texttype="serverTime"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('nodelist.minpdp')"
      :num="storagedata.min_pdp_interval"
      texttype="pdps"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('nodelist.mort')"
      :num="storagedata.pledge"
      texttype="4"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('nodelist.gain')"
      :num="storagedata.profit"
      texttype="4"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.description')"
      :text="storagedata.introduction"
      texttype="1"
    ></detailitem-nav>
  </div>
</template>

<script>
import DetailitemNav from '../component/Detailoverviewinfoitem'
export default {
  name: 'progresss',
  components: {
    DetailitemNav
  },
  props: {
    storagedata: {
      type: Object
    }
  },
  data() {
    return {
      // logourl: this.storagedata.logo_url
    }
  },
  computed: {
    userState() {
      return this.storagedata.current_stake < this.storagedata.init_pos
        ? 0
        : this.storagedata.current_stake - this.storagedata.init_pos
    }
  },
  mounted() {},
  beforeDestroy() {
    this.storagedata.logo_url = ''
  }
}
</script>
<style>
.nodelogo-wrapper {
  padding: 23px 0;
}
.nodelogo {
  width: 86px;
}
</style>
