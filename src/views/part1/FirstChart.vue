<template>
  <div id="part1_container0"></div>
</template>

<script>
import $ from "jquery";
let echarts = require("echarts/lib/echarts");

export default {
name: "ThirdChart",
data() {
  return {
      isPC:true,
      isRender:false,
  };
},

mounted() {
  // 初始化加载
  this.createListener();
},

 methods: {
  //监听窗口滚动
  windowScrollListener() {
      // 判断屏幕类型
      if(window.screen.width>window.screen.height){
          this.isPC = true;
      }else{
          this.isPC = false;
      }
      //获取操作元素最顶端到页面顶端的垂直距离
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(scrollTop)
      if(scrollTop<1600){
          this.isRender=false;
      }else if(this.isPC==true&&scrollTop>1600&&scrollTop<=2680&&this.isRender==false){
          this.$nextTick(()=>{
              this.mapChart();
          })
          this.isRender=true;
      }else if(scrollTop>2680){
          this.isRender=false;
      }
  },
  createListener() {
      this.mapChart();
      //添加滚动监听事件
      //在窗口滚动时调用监听窗口滚动方法
      window.addEventListener('scroll', this.windowScrollListener);
  },
  // 配置渲染map
  mapChart() {
      var chartDom = document.getElementById("part1_container0");
      let myChart = echarts.getInstanceByDom(chartDom)
      if(myChart!=null){
          myChart.dispose();
          myChart = echarts.init(chartDom);
          window.addEventListener("resize", ()=>{
              myChart.resize();
          });
      }else{
          myChart = echarts.init(chartDom);
      }
      function initEcharts(mapData){
          let option = {
              series: [
                {
                  type: 'tree',
                  data: [mapData],
                  top: '1%',
                  left: '11%',
                  bottom: '1%',
                  right: '15%',
                  symbolSize: 7,
                  initialTreeDepth:2,
                  label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9,
                    color:'#333'
                  },
                  leaves: {
                    label: {
                      position: 'right',
                      verticalAlign: 'middle',
                      align: 'left'
                    },
                    itemStyle:{
                      color:'#0F2650'
                    },
                  },
                  itemStyle:{
                    color:'#0F2650',
                  },
                  emphasis: {
                    focus: 'descendant'
                  },
                  expandAndCollapse: true,
                  animationDuration: 550,
                  animationDurationUpdate: 750
                }
              ]
          }
          myChart.setOption(option);
      }
      // 展示
      function showMap() {
            // myChart.clear();
            $.getJSON(`/static/data/treeData.json`, data=>{
              myChart.hideLoading();
              initEcharts(data)
            })
        }
        this.showMap=showMap;
        showMap()
  }
  }
};
</script>

<style lang="scss" scoped>
#part1_container0 {
width: 8rem;
height: 5rem;
margin: 0rem auto 0;
}
</style>
