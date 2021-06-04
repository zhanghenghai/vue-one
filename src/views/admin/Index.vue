<template>
  <div>
    <!-- 记得给容器加宽高，不然无法显示 -->
    <div id="myChart" style="width: 100%; height: 600px;"></div>
  </div>
</template>

<script>
// 引入echarts
var echarts = require('echarts');
export default {
  name: "Index",
  data() {
    return {

    };
  },
  created() {
    var then = this;
    // 调用方法创建
    setTimeout(function() {
      then.drawLine();
    }, 500);
  },
  methods: {
    drawLine() {

      // 初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));

      // 屏幕尺寸变化时，重新调整图表元素大小
      let sizeFun = function() {
        myChart.resize();
      };
      window.addEventListener("resize", sizeFun);

      // 绘制图表
      myChart.setOption({
        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: [
                {value: 40, name: 'rose 1'},
                {value: 38, name: 'rose 2'},
                {value: 32, name: 'rose 3'},
                {value: 30, name: 'rose 4'},
                {value: 28, name: 'rose 5'},
                {value: 26, name: 'rose 6'},
                {value: 22, name: 'rose 7'},
                {value: 18, name: 'rose 8'}
              ]
            }
          ]

        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
      });
    }
  },
};
</script>

<style scoped>

</style>
