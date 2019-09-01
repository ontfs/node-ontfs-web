<template>
    <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    totalstake: {
      type: Number,
    },
    totalnostake: {
      type: Number,
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
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
      this.chart = echarts.init(this.$el)

      this.chart.setOption({
        tooltip: {
          confine:true,
          trigger: 'item',
          formatter: '<div style="padding:12px;">{b}(ONT) :</br> <span style="font-weight:700;">{c} ({d}%)</span></div>'
        },
        legend: {
          left: 'center',
          show:false,
          bottom: '10',
          data: ['Total Staking Amount' , 'Total ONT Supply']
        },
        color:['#48A3FF','#F2F2F2'],
        series: [
          {
            name: 'ONT Amount',
            type: 'pie',
            roseType: false,
            radius: [0, 95],
            center: ['50%', '50%'],
            data: [
              { value: this.totalstake, 
                name: 'Total Staking Amount',
                label:{
                  show:false
                },
                labelLine:{
                  show:false,
                  emphasis:{
                    show:false
                  }
                }
              },
              { value: this.totalnostake, 
                name: 'Total no-Staking Amount',
                label:{
                  show:false
                },
                emphasis:{
                  itemStyle:{
                    color:['#F2F2F2'],
                  }
                },
                labelLine:{
                  show:false,
                  emphasis:{
                    show:false
                  }
                }
              },
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
