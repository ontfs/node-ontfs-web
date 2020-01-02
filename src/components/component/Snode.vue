<template>
  <el-table :data="ndate" border @cell-click="openDetails" style="width: 100%">
    <el-table-column
      prop="node_rank"
      :label="$t('nodelist.rank')"
      fixed
      width="85"
    >
      <template slot="header">
        <span>
          {{ $t('nodelist.rank') }}
        </span>
      </template>
      <template slot-scope="scope">
        <div class="rank-change-wrapper">
          <span>{{ scope.row.node_rank }}</span>
          <img
            v-if="scope.row.rank_change > 0"
            src="../../assets/img/table/arrow-up.png"
            class="rank-change-img"
          />
          <img
            v-if="scope.row.rank_change < 0"
            src="../../assets/img/table/arrow-down.png"
            class="rank-change-img"
          />
          <span v-if="scope.row.rank_change > 0" class="rank-up-num">{{
            scope.row.rank_change
          }}</span>
          <span v-if="scope.row.rank_change < 0" class="rank-down-num">{{
            0 - scope.row.rank_change
          }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" :label="$t('nodelist.name')" fixed width="130">
    </el-table-column>
    <el-table-column prop="node_rank" :label="$t('nodelist.top49')" width="120">
      <template slot="header">
        <el-tooltip class="item" effect="light" placement="top">
          <span>
            {{ $t('nodelist.top49') }}
          </span>
        </el-tooltip>
      </template>
      <template slot-scope="scope">
        <div v-if="scope.row.node_rank < 50" class="top49">Top 49</div>
      </template>
    </el-table-column>
    <el-table-column prop="region" :label="$t('nodelist.location')" width="150">
    </el-table-column>
    <el-table-column prop="volume" :label="$t('nodelist.totalCap')" width="150">
    </el-table-column>
    <el-table-column
      prop="rest_vol"
      :label="$t('nodelist.remainCap')"
      width="150"
    >
    </el-table-column>
    <el-table-column prop="volume" :label="$t('nodelist.serverTime')">
      <template slot-scope="scope">
        {{ $HelperTools.getTransDate(scope.row.service_time) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    ndate: {
      type: Array
    }
  },
  mounted() {
    this.loading = false
  },
  data() {
    return {
      loading: true,
      customColors: [
        { color: '#48A3FF', percentage: 99 },
        { color: '#C2C2C2', percentage: 100 }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    },
    renderHeader(h, { column }) {
      return h('div', [
        h('span', column.label),
        h('i', {
          class: 'el-icon-question',
          style: 'color:#409eff;margin-left:5px;cursor:pointer',
          on: {
            click: this.open
          }
        })
      ])
    },
    open() {
      this.$alert(this.$t('nodelist.reward'), this.$t('nodelist.fee'), {
        confirmButtonText: 'OK'
      })
    },
    openDetails(row) {
      this.$router.push({
        name: 'detailstorage',
        params: { pk: row.public_key, address: row.address, type: 'storage' }
      })
    },
    handle(row, column, event, cell) {
      if (column.property == 'stakeprogress') {
        let url = this.$t('nodelist.stakeurl')
        if (parseInt(row.progress) < 100) {
          this.$router.push({
            name: 'stake'
          })
        } else {
          this.$router.push({
            name: 'detailtype',
            params: {
              pk: row.public_key,
              address: row.address,
              type: 'balance'
            }
          })
        }
      } else {
        this.$router.push({
          name: 'detailtype',
          params: { pk: row.public_key, address: row.address, type: 'balance' }
        })
      }
    }
  }
}
</script>
<style>
.top49 {
  width: 62px;
  height: 20px;
  background-color: rgba(194, 194, 194, 1);
  text-align: center;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
}
.el-table .cell {
  word-break: break-word;
}
.hover-row td {
  background-color: #f9f9f9 !important;
}
.hover-row td:first-child::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 2px;
  background-color: #48a3ff;
}
.cell div {
  padding-left: 0 !important;
}
.nodes-list-wrapper .el-table th > .cell {
  color: #fff;
}
.el-table th,
.el-table tr {
  cursor: pointer;
}
.lang_en .el-table th > .cell {
  font-family: NunitoSans-SemiBold, 'Avenir', Helvetica, Arial, sans-serif;
}
.el-table td .el-progress {
  max-width: 120px;
  display: flex;
}
.el-table td .el-progress-bar__outer {
  border-radius: 0px;
}
.el-table td .el-progress-bar__inner {
  border-radius: 0px;
}
.el-table__empty-text {
  background-image: url('../../assets/img/table/loading.gif');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  color: #ffffff00;
}
.rank-change-wrapper {
  display: flex;
  align-items: center;
}
.rank-change-img {
  height: 10px;
  width: 10px;
  margin: 0 4px 0 8px;
}
.rank-change-text {
  transform: translate(0px, 1px);
  position: absolute;
}
.rank-up-num {
  font-size: 10px;
  font-family: NunitoSans-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: rgba(54, 203, 71, 1);
  line-height: 14px;
  transform: translateY(0px);
}
.rank-down-num {
  font-size: 10px;
  font-family: NunitoSans-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: rgba(212, 0, 0, 1);
  line-height: 14px;
  transform: translateY(0px);
}
.tip-content-text {
  max-width: 280px;
}
.cell .el-progress__text {
  display: block;
  min-width: 40px;
}
.cell .el-progress-bar {
  transform: translateY(4px);
}
.goStake-text {
  font-size: 14px;
  font-family: NunitoSans-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: rgba(72, 163, 255, 1) !important;
  line-height: 19px;
}
</style>
