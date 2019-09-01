<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '350px'
    },
    height: {
      type: String,
      default: '300px'
    },
    bardata:{
      type: Array
    },
    barrankdata:{
      type: Array
    }
  },
  watch:{
    "rankchange":function(){
      let length = this.rankchange.length
      for(let i =0;i<5;i++){
        if(this.rankchange[i].rank_change > 0){
          this.showbardata.push(this.rankchange[i].name)
          this.shownamelist.push(this.rankchange[i].rank_change)
        }
      }
      this.initChart()
    }
  },
  data() {
    return {
      chart: null,
      showbardata:[],
      shownamelist:[]
    }
  },
  computed: {
    rankchange(){
        return this.$store.getters.rankchangelist || [];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    /* this.initChart() */
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        color : ['#48A3FF'],
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          axisPointer:{
            show:false
          },
          type: 'category',
          data: this.showbardata,
          axisLabel:{
            rotate:-45,
            color: "#000",
            fontSize:"12px",
            formatter:function(val){
              return val.length > 8 ? val.substr(0,7) + "..." : val;
            }
          },
          splitLine:{
            lineStyle:{
              color:["#fff"]
            }
          },
          axisLine:{
            show:false
          },
          axisTick: {
            show:false,
            alignWithLabel: true,
            lineStyle:{
              opacity:0
            }
          }
        }],
        yAxis: [{
          type: 'value',
          minInterval: 1,
          axisLabel:{
            color: "#C2C2C2"
          },
          splitArea:{
            areaStyle:{
              color:["#fff"]
            }
          },
          splitLine:{
            lineStyle:{
              color:["#F2F2F2"]
            }
          },
          axisLine:{
            show:false
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '',
          type: 'bar',
          stack: 'vistors',
          barWidth: '5%',
          data: this.shownamelist,
          animationDuration
        }]
      })
    }
  }
}
</script>
