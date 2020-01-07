<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="nodelogo-wrapper">
          <!-- <img class="nodelogo" :src="offchaindata.logo_url" /> -->
        </div>
      </el-col>
    </el-row>
    <detailitem-nav
      :title="$t('detail.name')"
      :text="offchaindata.name"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.rank')"
      :num="onchaindata.node_rank"
      texttype="2"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.position')"
      :text="offchaindata.region"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.address')"
      :text="offchaindata.address"
      texttype="address"
    ></detailitem-nav>
    <detailitem-nav
      v-if="offchaindata.website"
      :title="$t('detail.website')"
      :text="offchaindata.website"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      v-if="offchaindata.social"
      :title="$t('detail.social')"
      :text="offchaindata.social"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.pk')"
      :text="offchaindata.public_key"
      texttype="1"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.ontid')"
      :text="offchaindata.ont_id"
      texttype="ontid"
    ></detailitem-nav>
    <!--     <detailitem-nav :title="$t('detail.transactions')" :text="onchaindata.name"></detailitem-nav>
    <detailitem-nav :title="$t('detail.transfers')" :text="onchaindata.name"></detailitem-nav> -->
    <detailitem-nav
      :title="$t('detail.stakeamount')"
      :num="onchaindata.init_pos"
      texttype="ont"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.userstake')"
      :num="userState"
      texttype="ont"
    ></detailitem-nav>
    <detailitem-nav
      :title="$t('detail.description')"
      :text="offchaindata.introduction"
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
    onchaindata: {
      type: Object
    },
    offchaindata: {
      type: Object
    }
  },
  data() {
    return {
      logourl: this.offchaindata.logo_url
    }
  },
  computed: {
    userState() {
      return this.onchaindata.current_stake < this.onchaindata.init_pos
        ? 0
        : this.onchaindata.current_stake - this.onchaindata.init_pos
    }
  },
  mounted() {},
  beforeDestroy() {
    this.offchaindata.logo_url = ''
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
