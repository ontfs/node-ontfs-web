<template>
  <el-table
    :data="ndate"
    border
    @cell-click="handle"
    style="width: 100%">
    <el-table-column
      prop="node_rank"
      :label="$t('nodelist.rank')"
      fixed
      width="85">
      <template slot="header" slot-scope="scope">
        <el-tooltip class="item" effect="light"  placement="top">
          <div slot="content"><p class="tip-content-text">{{$t('nodelist.rankDesc')}}</p></div>
          <span>
            {{$t('nodelist.rank')}} 
          <img src="../../assets/img/table/info-circle.png" style="transform: translateY(2px);">
          </span>
        </el-tooltip>
      </template>
      <template slot-scope="scope">
        <div class="rank-change-wrapper"><span>{{scope.row.node_rank}}</span>
          <img v-if="scope.row.rank_change > 0" src="../../assets/img/table/arrow-up.png" class="rank-change-img">
          <!-- <img v-if="scope.row.rank_change == 0" src="../../assets/img/table/no-change.png" class="rank-change-img"> -->
          <img v-if="scope.row.rank_change < 0" src="../../assets/img/table/arrow-down.png" class="rank-change-img">
          <span v-if="scope.row.rank_change > 0" class="rank-up-num">{{scope.row.rank_change}}</span>
          <span v-if="scope.row.rank_change < 0" class="rank-down-num">{{0 - scope.row.rank_change}}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      :label="$t('nodelist.name')"
      fixed
      width="130"
      >
    </el-table-column>
    <el-table-column
      prop="node_rank"
      :label="$t('nodelist.top49')"
      width="120">
      <template slot="header" slot-scope="scope">
        <el-tooltip class="item" effect="light"  placement="top">
          <div slot="content"><p class="tip-content-text">{{$t('nodelist.top49Desc')}}</p></div>
          <span>
          {{$t('nodelist.top49')}}
          <img src="../../assets/img/table/info-circle.png" style="transform: translateY(2px);">
          </span>
        </el-tooltip>
      </template>
      <template slot-scope="scope">
        <div v-if="scope.row.node_rank<50" class="top49">Top 49</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="region"
      :label="$t('nodelist.location')"
      width="100">
    </el-table-column>
    <el-table-column
      prop="current_stake"
      :label="$t('nodelist.totalstake')"
      width="145">
      <template slot="header" slot-scope="scope">
        <div class="table-num-header"><span>{{$t('nodelist.totalstake')}}</span></div>
      </template>
      <template slot-scope="scope">
        <div class="table-num-text-right">{{$HelperTools.toFinancialVal(scope.row.current_stake)}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="init_pos"
      :label="$t('nodelist.initpos')"
      width="145">
      <template slot="header" slot-scope="scope">
        <div class="table-num-header"><span>{{$t('nodelist.initpos')}}</span></div>
      </template>
      <template slot-scope="scope">
        <div class="table-num-text-right">{{$HelperTools.toFinancialVal(scope.row.init_pos)}}</div>
      </template>
    </el-table-column>
<!--     <el-table-column
      prop="name"
      :label="$t('nodelist.lastblocks')"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      :label="$t('nodelist.blockproduced')"
      width="300">
    </el-table-column> -->
<!--     <el-table-column
      prop="name"
      :label="$t('nodelist.income')"
      width="300">
    </el-table-column> -->
    <el-table-column
      prop="node_proportion"
      :label="$t('nodelist.fee')"
      width="170">
      <template slot="header" slot-scope="scope">
        <div class="table-num-header">
        <el-tooltip class="item" effect="light"  placement="top">
          <div slot="content"><p class="tip-content-text">{{$t('nodelist.reward1')}}</p></div>
          <span>
          {{$t('nodelist.fee')}}
          <img src="../../assets/img/table/info-circle.png" style="transform: translateY(2px);">
          </span>
        </el-tooltip>
        </div>
      </template>
      <template slot-scope="scope">
        <div class="table-num-text-right">{{scope.row.node_proportion}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="progress"
      :label="$t('nodelist.progress')"
      width="160">
      <template slot-scope="scope">
        <el-progress :percentage="parseInt(scope.row.progress)" :color="customColors"></el-progress>
      </template>
    </el-table-column>
    <el-table-column
      prop="stakeprogress"
      :label="$t('nodelist.stake')"
      >
      <template slot-scope="scope">
        <div v-if="parseInt(scope.row.progress) < 100" ><a class="goStake-text">Stake</a></div>
      </template>
    </el-table-column>
<!--     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column> -->
  </el-table>
</template>

<script>
  export default {
  props: {
    ndate: {
      type: Array
    },
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  mounted(){
    this.loading = false
  },
  data() {
    return {
      loading:true,      
      customColors:[
        {color: '#48A3FF', percentage: 99},
        {color: '#C2C2C2', percentage: 100}
      ]
    }
  },
  methods:{
    renderHeader (h,{column}) {
        return h(
            'div',[ 
                h('span', column.label),
                h('i', {
                        class:'el-icon-question',
                        style:'color:#409eff;margin-left:5px;cursor:pointer',
                        on:{
                            click:this.open
                        }
                    })
            ]
        );
    },
    open() {
      this.$alert(this.$t('nodelist.reward'), this.$t('nodelist.fee'), {
        confirmButtonText: 'OK'
      });
    },
    openDetails(row){
      this.$router.push({
            name: 'detailtype',
            params: {pk: row.public_key,address:row.address,type:'balance'}
          })
    },
    handle(row,column,event,cell){
        if(column.property == "stakeprogress"){
          let url = this.$t('nodelist.stakeurl')
          if( parseInt(row.progress) < 100 ){
            this.$router.push({
                  name: 'stake'
                }) 
          }else{
            this.$router.push({
                  name: 'detailtype',
                  params: {pk: row.public_key,address:row.address,type:'balance'}
                })            
          }
        }else{
          this.$router.push({
                name: 'detailtype',
                params: {pk: row.public_key,address:row.address,type:'balance'}
              })
        }
    }
  }
  }
</script>
<style>

.top49{
  width: 62px;
  height: 20px;
  background-color: rgba(194,194,194,1);
  text-align: center;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
}
.el-table .cell{
  word-break: break-word;
}
.hover-row td{
  background-color: #F9F9F9 !important;
}
.hover-row td:first-child::before{
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 2px;
    background-color: #48A3FF;
}
.cell div{
  padding-left:0 !important;
}
.nodes-list-wrapper  .el-table th>.cell {
  color:#fff;
}
.el-table th, .el-table tr {
  cursor: pointer;
}
.lang_en .el-table th>.cell{
    font-family: NunitoSans-SemiBold,'Avenir', Helvetica, Arial, sans-serif;
}
.el-table td .el-progress{
  max-width: 120px;
  display: flex;
}
.el-table td .el-progress-bar__outer{
  border-radius: 0px;
}
.el-table td .el-progress-bar__inner{
  border-radius: 0px;
}
.el-table__empty-text{
    background-image: url("../../assets/img/table/loading.gif");
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    color: #ffffff00;
}
.rank-change-wrapper{
  display: flex;
  align-items: center;
}
.rank-change-img{
  height: 10px;
  width: 10px;
  margin: 0 4px 0 8px;
}
.rank-change-text{
  transform: translate(0px,1px);
  position: absolute;
}
.rank-up-num{
  font-size:10px;
  font-family:NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:400;
  color:rgba(54,203,71,1);
  line-height:14px;
  transform: translateY(0px);
}
.rank-down-num{
  font-size:10px;
  font-family:NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:400;
  color:rgba(212,0,0,1);
  line-height:14px;
  transform: translateY(0px);
}
.tip-content-text{
  max-width: 280px;
}
.cell .el-progress__text{
  display: block;
  min-width: 40px;
}
.cell .el-progress-bar{
  transform: translateY(4px);
}
.goStake-text{
  font-size:14px;
  font-family:NunitoSans-Regular,'Avenir', Helvetica, Arial, sans-serif;
  font-weight:400;
  color: rgba(72,163,255,1) !important;
  line-height:19px;
}
</style>