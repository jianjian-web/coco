<template>
  <div class='dashboardCall'>
   <div class='head'>
      <details-item title='总联系人' number='100' unit='人'></details-item>
      <details-item title='呼叫次数' number='100' unit='次'></details-item>
      <details-item title='接通次数' number='100' unit='次'></details-item>
   </div>
   <div class='body'>
      <div class='chartWrapper'>
        <p class='number'>800通</p>
        <IEcharts :option='pie'></IEcharts>
      </div>
      <div class='chartWrapper'>
        <p class='number'>800通</p>
        <IEcharts :option='pie'></IEcharts>
      </div>
   </div>
    <div class='chartWrapper barWrapper'>
      <IEcharts :option='bar'></IEcharts>
    </div>
  </div>
</template>

<script>
import detailsItem from './DetailsItemMini'
import IEcharts from 'vue-echarts-v3/src/lite.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
// import 'echarts/lib/component/singleAxis'

export default {
  name: 'dashboardCall',
  data () {
    return {
      pie: {
        title: {
          text: '呼叫结果情况'
        },
        tooltip: {},
        series: [
          {
            name: '访问来132源',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      },
      bar: {
        title: {
          text: '通话记录情况'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'],
          y: 'bottom'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'dashed'
                  }
                }
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }
    }
  },
  components: {
    detailsItem,
    IEcharts
  }
}
</script>

<style lang='less' scoped>
.dashboardCall {
  .head {
    display: flex;
    margin-bottom: 20px;
  }
  .barWrapper {
    margin-top: 20px;
    margin-left: 0 !important;
  }
  .chartWrapper {
    position: relative;
    flex: 1;
    height: 350px;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    padding: 20px;
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }
    .number {
      font-size: 1.5em;
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  .body {
    display: flex;
  }
}
</style>
